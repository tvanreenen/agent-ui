import { afterEach, describe, expect, it } from 'vitest';
import '../src/index.ts';

type AgentUIElement = HTMLElement & {
  updateComplete: Promise<unknown>;
  setOpen(value: boolean): void;
  appendToLastMessage(content: string): void;
};

type ScrollMetrics = {
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
};

async function createOpenAgentUI(): Promise<AgentUIElement> {
  const element = document.createElement('agent-ui') as AgentUIElement;
  document.body.appendChild(element);
  await element.updateComplete;
  element.setOpen(true);
  await element.updateComplete;
  return element;
}

function mockScrollMetrics(element: HTMLElement, metrics: ScrollMetrics): void {
  Object.defineProperties(element, {
    scrollHeight: {
      configurable: true,
      get: () => metrics.scrollHeight
    },
    clientHeight: {
      configurable: true,
      get: () => metrics.clientHeight
    },
    scrollTop: {
      configurable: true,
      get: () => metrics.scrollTop,
      set: (value: number) => {
        metrics.scrollTop = value;
      }
    }
  });
}

function dispatchScroll(element: HTMLElement): void {
  element.dispatchEvent(new Event('scroll'));
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('agent-ui custom element', () => {
  it('registers the element', () => {
    expect(customElements.get('agent-ui')).toBeDefined();
  });

  it('renders without throwing', async () => {
    const element = document.createElement('agent-ui') as AgentUIElement;

    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.shadowRoot).not.toBeNull();
    expect(element.shadowRoot?.querySelector('.container')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('.input-field')).not.toBeNull();
  });

  it('follows streamed content while pinned to the bottom', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1000, clientHeight: 100, scrollTop: 900 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    element.appendToLastMessage('first chunk');
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(1000);
  });

  it('relinquishes a pending stream scroll when the user scrolls upward', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1000, clientHeight: 100, scrollTop: 900 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    element.appendToLastMessage('first chunk');
    metrics.scrollTop = 400;
    metrics.scrollHeight = 1200;
    dispatchScroll(messageContainer);
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(400);

    metrics.scrollHeight = 1300;
    element.appendToLastMessage(' second chunk');
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(400);
  });

  it('keeps following when an upward scroll remains within the bottom threshold', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1000, clientHeight: 100, scrollTop: 900 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    metrics.scrollTop = 880;
    dispatchScroll(messageContainer);
    metrics.scrollHeight = 1010;
    element.appendToLastMessage('small chunk');
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(1010);
  });

  it('resumes following after the user scrolls near the bottom', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1200, clientHeight: 100, scrollTop: 1100 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    metrics.scrollTop = 500;
    dispatchScroll(messageContainer);
    metrics.scrollTop = 1080;
    dispatchScroll(messageContainer);

    metrics.scrollHeight = 1300;
    element.appendToLastMessage('next chunk');
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(1300);
  });

  it('resumes following when the user sends a message', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1200, clientHeight: 100, scrollTop: 1100 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    metrics.scrollTop = 500;
    dispatchScroll(messageContainer);
    metrics.scrollHeight = 1400;

    const input = element.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
    input.value = 'new message';
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await element.updateComplete;

    expect(metrics.scrollTop).toBe(1400);
  });

  it('follows layout changes through a panel transition while pinned', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1200, clientHeight: 100, scrollTop: 1100 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    const panelToggle = element.shadowRoot?.querySelector(
      '[title="Switch to panel mode"]'
    ) as HTMLButtonElement;
    panelToggle.click();
    await element.updateComplete;

    metrics.scrollHeight = 1500;
    const container = element.shadowRoot?.querySelector('.container') as HTMLElement;
    container.dispatchEvent(new Event('transitionend'));

    expect(metrics.scrollTop).toBe(1500);
  });

  it('does not reclaim scrolling at the end of a panel transition', async () => {
    const element = await createOpenAgentUI();
    const messageContainer = element.shadowRoot?.querySelector('.message-container') as HTMLElement;
    const metrics = { scrollHeight: 1200, clientHeight: 100, scrollTop: 1100 };
    mockScrollMetrics(messageContainer, metrics);
    dispatchScroll(messageContainer);

    const panelToggle = element.shadowRoot?.querySelector(
      '[title="Switch to panel mode"]'
    ) as HTMLButtonElement;
    panelToggle.click();
    await element.updateComplete;

    metrics.scrollTop = 500;
    dispatchScroll(messageContainer);
    metrics.scrollHeight = 1500;
    const container = element.shadowRoot?.querySelector('.container') as HTMLElement;
    container.dispatchEvent(new Event('transitionend'));

    expect(metrics.scrollTop).toBe(500);
  });
});
