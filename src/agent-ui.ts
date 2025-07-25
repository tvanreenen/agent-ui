import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

@customElement('agent-ui')
export class AgentUI extends LitElement {
  static styles = css`
    :host { 
      display: block;
      z-index: 1000; 
      font-family: sans-serif;
      box-sizing: border-box;
      font-size: 14px;
    }
    
    /* Backdrop overlay for expanded state */
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 999;
      pointer-events: none;
    }
    
    .backdrop.visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    /* Panel mode - hide backdrop */
    .backdrop.panel-mode {
      display: none;
    }
    
    .container {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(75vw, 800px);
      background: white;
      border-radius: 12px 12px 0 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      font-family: sans-serif;
      /* Use CSS Grid for smooth height animation */
      display: grid;
      grid-template-rows: auto 0fr;
      /* Add smooth transitions for expand/collapse */
      transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                  border-radius 0.8s ease,
                  grid-template-rows 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  right 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  left 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      /* Default collapsed state - partially hidden */
      bottom: -68px;
    }
    
    /* Hover state - slide into view */
    .container:hover {
      bottom: 0;
    }
    
    /* Focused state - slide into view */
    .container.input-focused {
      bottom: 0;
    }
    
    .container.expanded {
      width: 80vw;
      height: 80vh;
      bottom: 0 !important;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border-radius: 12px 12px 0 0;
      grid-template-rows: auto 1fr;
    }
    
    /* Panel mode styles */
    .container.panel-mode {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0 !important;
      left: auto;
      transform: none;
      width: 400px;
      height: 100vh;
      border-radius: 0;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
    
    /* Add margin to body when in panel mode */
    :host(.panel-mode) {
      margin-right: 400px;
    }
    
    /* Responsive breakpoints */
    @media (max-width: 768px) {
      .container {
        width: 95vw;
        bottom: -68px;
        left: 50%;
        transform: translateX(-50%);
      }
      .container:hover {
        bottom: 0;
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
        bottom: 0 !important;
        left: 50%;
        transform: translateX(-50%);
        background: white;
      }
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
        bottom: 0 !important;
      }
      :host(.panel-mode) {
        margin-right: 0;
      }
    }
    
    @media (max-width: 480px) {
      .container {
        width: 100vw;
        border-radius: 0;
        bottom: -68px;
      }
      .container:hover {
        bottom: 0;
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
        bottom: 0 !important;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0;
        background: white;
      }
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
        bottom: 0 !important;
      }
    }
    .header {
      background: #702c62;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      /* Add transition for header background change */
      transition: background-color 0.3s ease, border-bottom 0.3s ease;
    }
    .container.expanded .header {
      background: white;
      border-bottom: none;
      border-top: 1px solid #e0e0e0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding-bottom: 4px;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #f8f9fa;
      border-radius: 24px;
      padding: 8px 16px;
      border: 1px solid #e0e0e0;
    }
    .input-field {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 14px;
      outline: none;
      color: #333;
    }
    .input-field::placeholder {
      color: #666;
    }
    .send-button {
      background: white;
      border: none;
      color: #666666;
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .send-button:hover {
      background: rgba(112, 44, 98, 0.1);
      color: #702c62;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    .send-button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .suggestions {
      padding: 4px 0 0 13px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .suggestion {
      background: none;
      color: #702c62;
      border: none;
      cursor: pointer;
      font-size: 14px;
      white-space: nowrap;
      user-select: none;
      transition: background-color 0.2s ease;
      border-radius: 4px;
      padding: 2px 6px;
      font-style: italic;
    }
    .suggestion:hover {
      background: rgba(112, 44, 98, 0.1);
    }
    .body {
      background: #ffffff;
      padding: 16px;
      padding-bottom: 80px;
      overflow-y: auto;
      /* Grid item will animate height automatically */
      min-height: 0;
      opacity: 0;
      /* Smooth transitions */
      transition: opacity 0.8s ease 0.2s;
    }
    .container.expanded .body {
      opacity: 1;
    }
    
    /* Message spacing */
    .message {
      margin: 0;
      padding: 8px 0;
    }
    
    /* Style slotted message elements */
    ::slotted(.message) {
      margin: 0;
      padding: 8px 0;
    }
    
    /* Internal message styling */
    .user-message .message-author {
      color: #125361;
    }
    
    .agent-message .message-author {
      color: #702c62;
    }
    .toggle-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #333;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      /* Add transition for button hover and transform */
      transition: all 0.2s ease;
    }
    .toggle-button:hover {
      background: #555;
      transform: scale(1.1);
    }
    .toggle-button:active {
      transform: scale(0.95);
    }
    
    .panel-toggle-button {
      position: absolute;
      top: 8px;
      right: 40px;
      background: #333;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      /* Add transition for button hover and transform */
      transition: all 0.2s ease;
    }
    .panel-toggle-button:hover {
      background: #555;
      transform: scale(1.1);
    }
    .panel-toggle-button:active {
      transform: scale(0.95);
    }
  `;

  @property({ type: Boolean }) private open = false;
  @property({ type: Boolean }) private panelMode = false;
  @property({ type: Boolean }) private inputFocused = false;
  @property({ type: Array }) prompts: string[] = [];
  @property({ type: String }) agentName: string = 'Agent';
  @property({ type: String }) placeholderText: string = 'Ask me anything - I can help with data, actions, and insights';
  @state() private messages: Array<{type: 'user' | 'agent', text: string}> = [];

  setOpen(value: boolean) {
    this.open = value;
    this.requestUpdate();
    
    // If closing and in panel mode, also exit panel mode
    if (!value && this.panelMode) {
      this.panelMode = false;
      document.body.style.marginRight = '0';
      document.body.style.transition = '';
    }
    
    // Reset input focused state when opening (since it will be fully visible)
    if (value) {
      this.inputFocused = false;
    }
    
    // Ensure proper bottom positioning when opening/closing
    this.updateComplete.then(() => {
      const container = this.shadowRoot?.querySelector('.container') as HTMLElement;
      if (container) {
        if (value) {
          // When opening, ensure it's at bottom: 0
          container.style.bottom = '0';
        } else {
          // When closing, reset to default collapsed state
          container.style.bottom = '';
        }
      }
    });
  }

  addMessage(type: 'user' | 'agent', text: string) {
    this.messages = [...this.messages, { type, text }];
    this.requestUpdate();
    // Auto-scroll after message is added
    this.updateComplete.then(() => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom() {
    const chatBody = this.shadowRoot?.querySelector('.body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    
    // Add global keyboard listeners
    document.addEventListener('keydown', this._handleGlobalKeydown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    
    // Remove global keyboard listeners
    document.removeEventListener('keydown', this._handleGlobalKeydown.bind(this));
    
    // Clean up body margin if in panel mode
    if (this.panelMode) {
      document.body.style.marginRight = '0';
      document.body.style.transition = '';
    }
  }

  private _handleGlobalKeydown(e: KeyboardEvent) {
    // Ctrl/Cmd + K to focus input (input is always present now)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const input = this.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
      if (input) {
        input.focus();
        this.inputFocused = true;
        this.requestUpdate();
      }
    }
    
    // Esc to collapse when expanded
    if (e.key === 'Escape' && this.open) {
      e.preventDefault();
      this.setOpen(false);
    }
  }

  render() {
    return html`
      <div class="backdrop ${this.open ? 'visible' : ''} ${this.panelMode ? 'panel-mode' : ''}" @click=${this._handleBackdropClick}></div>
      <div class="container ${this.open ? 'expanded' : ''} ${this.panelMode ? 'panel-mode' : ''} ${this.inputFocused ? 'input-focused' : ''}">
        ${this.open ? html`
          <div class="body">
            ${this.messages.map(msg => html`
              <div class="message ${msg.type}-message">
                <strong class="message-author">${msg.type === 'user' ? 'You' : this.agentName}:</strong> ${msg.text}
              </div>
            `)}
          </div>
        ` : ''}
        <div class="header">
          <div class="input-wrapper">
            <input 
              class="input-field" 
              type="text" 
              placeholder=${this.placeholderText}
              @keydown=${this._onKeydown}
              @focus=${this._onInputFocus}
              @blur=${this._onInputBlur}
            />
            <button class="send-button" @click=${this._sendMessage}>
              <!-- Send icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
            </button>
          </div>
          ${this.open ? html`
            <div class="suggestions">
              ${this.prompts.map(prompt => html`
                <button class="suggestion" @click=${() => this._handleSuggestion(prompt)}>
                  "${prompt}"
                </button>
              `)}
            </div>
          ` : ''}
        </div>
        <button class="toggle-button" @click=${this._toggle}>
          ${this.open ? html`
            <!-- lucide: minimize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minimize2-icon lucide-minimize-2"><path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/></svg>
          ` : html`
            <!-- lucide: maximize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          `}
        </button>
        ${this.open ? html`
          <button class="panel-toggle-button" @click=${this._togglePanel} title=${this.panelMode ? 'Switch to dialog mode' : 'Switch to panel mode'}>
            ${this.panelMode ? html`
              <!-- lucide: panel-bottom -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-bottom-icon lucide-panel-bottom"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/></svg>
            ` : html`
              <!-- lucide: panel-right -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-icon lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
            `}
          </button>
        ` : ''}
      </div>
    `;
  }

  private _toggle() {
    const wasOpen = this.open;
    this.setOpen(!this.open);
    
    // If we're opening from minimized state, focus the input
    if (!wasOpen && this.open) {
      this.updateComplete.then(() => {
        const input = this.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
        if (input) {
          input.focus();
          // Set input focused state to keep widget visible
          this.inputFocused = true;
          this.requestUpdate();
        }
      });
    }
  }

  private _handleSuggestion(prompt: string) {
    // Add user message internally
    this.addMessage('user', prompt);
    // Dispatch event for external handling
    this.dispatchEvent(new CustomEvent('message', { detail: { query: prompt } }));
  }

  private _sendMessage() {
    const input = this.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
    if (input && input.value.trim()) {
      const messageText = input.value;
      // Add user message internally
      this.addMessage('user', messageText);
      // Dispatch event for external handling
      this.dispatchEvent(new CustomEvent('message', { detail: { query: messageText } }));
      input.value = '';
    }
    // Expand the widget when send is clicked
    if (!this.open) {
      this.setOpen(true);
      // Reset input focused state since widget will be expanded
      this.inputFocused = false;
      // Preserve focus after expansion
      this.updateComplete.then(() => {
        const newInput = this.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
        if (newInput) {
          newInput.focus();
        }
      });
    }
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this._sendMessage();
    }
  }

  private _onInputFocus() {
    this.inputFocused = true;
    this.requestUpdate();
  }

  private _onInputBlur() {
    this.inputFocused = false;
    this.requestUpdate();
  }

  private _handleBackdropClick(e: MouseEvent) {
    if (this.open && e.target === this.shadowRoot?.querySelector('.backdrop')) {
      this.setOpen(false);
    }
  }

  private _togglePanel() {
    this.panelMode = !this.panelMode;
    this.requestUpdate();
    
    // Add/remove panel-mode class to body for margin adjustment
    if (this.panelMode) {
      document.body.style.marginRight = '400px';
      document.body.style.transition = 'margin-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      document.body.style.marginRight = '0';
      // Remove transition after animation completes
      setTimeout(() => {
        document.body.style.transition = '';
      }, 800);
    }
    
    // Preserve focus on input field after mode change
    this.updateComplete.then(() => {
      const input = this.shadowRoot?.querySelector('.input-field') as HTMLInputElement;
      if (input) {
        input.focus();
        // Ensure input focused state is maintained
        this.inputFocused = true;
        this.requestUpdate();
      }
    });
  }
}

declare global {
  interface Window { AgentUI: any; }
}

// Expose a simple global API
window.AgentUI = {
  init: (opts: { prompts: string[], agentName: string, placeholderText: string }) => {
    let el = document.querySelector('agent-ui') as AgentUI;
    if (!el) {
      el = document.createElement('agent-ui') as AgentUI;
      document.body.appendChild(el);
    }
    el.prompts = opts.prompts;
    el.agentName = opts.agentName;
    el.placeholderText = opts.placeholderText;
    el.requestUpdate(); // This is necessary for the reactive system to work
    return el;
  }
};