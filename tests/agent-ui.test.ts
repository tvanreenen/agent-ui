import { afterEach, describe, expect, it } from 'vitest';
import '../src/index.ts';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('agent-ui custom element', () => {
  it('registers the element', () => {
    expect(customElements.get('agent-ui')).toBeDefined();
  });

  it('renders without throwing', async () => {
    const element = document.createElement('agent-ui') as HTMLElement & {
      updateComplete?: Promise<unknown>;
      shadowRoot: ShadowRoot | null;
    };

    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.shadowRoot).not.toBeNull();
    expect(element.shadowRoot?.querySelector('.container')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('.input-field')).not.toBeNull();
  });
});
