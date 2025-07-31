import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { Message, DisplayMode, ExpandedMode } from './types.js';
import { parseMarkdown, sanitizeText, loadIconFromUrl, copyToClipboard, applyPanelModeStyles, removePanelModeStyles } from './utils.js';
import { PANEL_WIDTH, PANEL_MARGIN_RIGHT, TRANSITION_DURATION, PANEL_TRANSITION_DURATION, CSS_VARIABLES, KEYBOARD_SHORTCUTS, CSS_CLASSES } from './constants.js';

@customElement('agent-ui-2')
export class AgentUI2 extends LitElement {
  static styles = css`
    :host { 
      display: block;
      z-index: 1000; 
      font-family: sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      --agent-ui-brand-color: #702c62;
      --agent-ui-brand-color-light: rgba(112, 44, 98, 0.1);
    }
    
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s ease, visibility 0.4s ease;
      z-index: 999;
      pointer-events: none;
    }    
    
    .backdrop.visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    .backdrop.panel-mode {
      display: none;
    }
    
    .container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      transition: all 0.4s ease;
      display: flex;
      flex-direction: column;
    }
    
    .container.expanded {
      width: 80vw;
      height: calc(80vh - var(--agent-ui-header-height, 0px));
      left: 50%;
      top: calc(var(--agent-ui-header-height, 0px) + (20vh) / 2);
      transform: translate(-50%, 0);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
    }
    
    .container.expanded .message-container {
      flex: 1;
      overflow-y: auto;
      margin-bottom: 0;
      min-height: 0;
    }
    
    .header-bar {
      padding: 12px 16px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .header-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
    
    .container.expanded .input-container {
      flex-shrink: 0;
      margin-top: 0;
    }
    
    .container.panel-mode {
      position: fixed;
      top: var(--agent-ui-header-height, 0px);
      right: 0;
      bottom: 0 !important;
      left: auto;
      transform: none;
      width: 400px;
      height: calc(100vh - var(--agent-ui-header-height, 0px));
      border-radius: 0;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
    
    :host(.panel-mode) {
      margin-right: 400px;
    }
    
    @media (max-width: 768px) {
      .container.expanded {
        width: 80vw;
        height: calc(80vh - var(--agent-ui-header-height, 0px));
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
      .container.expanded {
        width: 80vw;
        height: calc(80vh - var(--agent-ui-header-height, 0px));
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
    
    .input-container {
      padding: 8px;
      flex-shrink: 0;
    }
    
    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f8f9fa;
      border-radius: 12px;
      padding: 6px 12px;
      border: 1px solid #e0e0e0;
      max-width: 80vw;
      margin: 0 auto;
      transition: all 0.2s ease;
    }
    
    .input-prefix {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
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
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      cursor: pointer;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .send-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .send-button:active {
      transform: scale(0.95);
    }
    
    .send-button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .send-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f0f0f0;
      color: #999;
    }
    
    .send-button:disabled:hover {
      background: #f0f0f0;
      color: #999;
      transform: none;
      box-shadow: none;
    }
    
    .message-container {
      overflow-y: auto;
      flex: 1;
      min-height: 0;
    }
    
    .message {
      margin: 8px;
      padding: 8px 12px;
      border-radius: 8px;
    }
    
    .user-message {
      background: var(--agent-ui-brand-color-light);
      display: block;
      width: fit-content;
    }
    
    .agent-message {
      background: white;
      position: relative;
    }
    
    .agent-message .copy-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .agent-message:hover .copy-button {
      display: flex;
    }
    
    .copy-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .copy-button:active {
      transform: scale(0.95);
    }
    
    .typing-indicator {
      display: inline-block;
      animation: typing 1.4s infinite;
    }    
    
    .typing-indicator span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--agent-ui-brand-color);
      margin: 0 2px;
      animation: typing-dot 1.4s infinite;
    }    
    
    .typing-indicator span:nth-child(2) {
      animation-delay: 0.2s;
    }    
    
    .typing-indicator span:nth-child(3) {
      animation-delay: 0.4s;
    }    
    
    @keyframes typing-dot {
      0%, 60%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      30% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .toggle-button {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    
    .toggle-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: translateY(-50%) scale(1.1);
    }
    
    .toggle-button:active {
      transform: translateY(-50%) scale(0.95);
    }
    
    .container.expanded .toggle-button {
      top: 8px;
      transform: none;
    }
    
    .container.expanded .toggle-button:hover {
      transform: scale(1.1);
    }
    
    .container.expanded .toggle-button:active {
      transform: scale(0.95);
    }
    
    .panel-toggle-button {
      position: absolute;
      top: 8px;
      right: 40px;
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    
    .panel-toggle-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .panel-toggle-button:active {
      transform: scale(0.95);
    }
    
    table {
      border-collapse: collapse;
    }
    
    th, td {
      border: 1px solid #e0e0e0;
      padding: 4px 6px;
      text-align: left;
    }
    
    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
    
    th {
      text-align: left !important;
    }
    
    ul, ol {
      padding-left: 20px;
    }
    
    .message-text > h1:first-child,
    .message-text > h2:first-child,
    .message-text > h3:first-child,
    .message-text > h4:first-child,
    .message-text > h5:first-child,
    .message-text > h6:first-child,
    .message-text > p:first-child,
    .message-text > ul:first-child,
    .message-text > ol:first-child,
    .message-text > blockquote:first-child,
    .message-text > pre:first-child {
      margin-top: 0;
    }
    
    .message-text > h1:last-child,
    .message-text > h2:last-child,
    .message-text > h3:last-child,
    .message-text > h4:last-child,
    .message-text > h5:last-child,
    .message-text > h6:last-child,
    .message-text > p:last-child,
    .message-text > ul:last-child,
    .message-text > ol:last-child,
    .message-text > blockquote:last-child,
    .message-text > pre:last-child {
      margin-bottom: 0;
    }
  `;

  @property({ type: String }) placeholderText: string = 'Ask me anything - I can help with data, actions, and insights';
  @property({ type: String }) iconSvg: string = '';
  @property({ type: String, attribute: 'icon-url' }) iconUrl: string = '';
  @property({ type: Number, attribute: 'header-height' }) headerHeight: number = 0;
  @property({ type: String }) conversationTitle: string = 'New Conversation';
  
  @state() private messages: Message[] = [];
  @state() private open: boolean = false;
  @state() private panelMode: boolean = false;
  @state() private inputFocused: boolean = false;
  @state() private loadedIconSvg: string = '';
  @state() private isTyping: boolean = false;
  @state() private isSubmittable: boolean = true;
  @state() private currentMode: DisplayMode = 'min';
  @state() private lastExpandedMode: ExpandedMode = 'dialog';

  // Public API methods
  setOpen(value: boolean): void {
    this.open = value;
    this.requestUpdate();
    
    if (!value && this.panelMode) {
      this.panelMode = false;
      removePanelModeStyles();
    }
    
    if (value) {
      this.inputFocused = false;
      document.documentElement.style.setProperty(CSS_VARIABLES.HEADER_HEIGHT, `${this.headerHeight}px`);
    }
    
    this.updateComplete.then(() => {
      const container = this.shadowRoot?.querySelector(`.${CSS_CLASSES.CONTAINER}`) as HTMLElement;
      if (container) {
        container.style.bottom = value ? '0' : '';
      }
    });
  }

  setTyping(typing: boolean): void {
    this.isTyping = typing;
    this.requestUpdate();
  }

  setSubmittable(submittable: boolean): void {
    this.isSubmittable = submittable;
    this.requestUpdate();
  }

  replaceLastMessage(content: string): void {
    if (this.messages.length === 0) {
      this.messages = [{ type: 'agent', text: content }];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
      return;
    }

    const lastMessage = this.messages[this.messages.length - 1];
    if (lastMessage.type === 'agent') {
      this.messages = [
        ...this.messages.slice(0, -1),
        { ...lastMessage, text: content }
      ];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
    } else {
      this.messages = [...this.messages, { type: 'agent', text: content }];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
    }
  }

  appendToLastMessage(content: string): void {
    if (this.messages.length === 0) {
      this.messages = [{ type: 'agent', text: content }];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
      return;
    }

    const lastMessage = this.messages[this.messages.length - 1];
    if (lastMessage.type === 'agent') {
      const updatedText = lastMessage.text + content;
      this.messages = [
        ...this.messages.slice(0, -1),
        { ...lastMessage, text: updatedText }
      ];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
    } else {
      this.messages = [...this.messages, { type: 'agent', text: content }];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
    }
  }

  setInputValue(value: string): void {
    this.updateComplete.then(() => {
      const input = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
      if (input) {
        input.value = value;
      }
    });
  }

  // Private utility methods
  private _scrollToBottom(): void {
    const messageContainer = this.shadowRoot?.querySelector(`.${CSS_CLASSES.MESSAGE_CONTAINER}`);
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }

  private _parseMessageContent(content: string, isUserMessage: boolean): string {
    return isUserMessage ? sanitizeText(content) : parseMarkdown(content);
  }

  // Lifecycle methods
  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this._handleGlobalKeydown.bind(this));
    this._loadIcon();
    document.documentElement.style.setProperty(CSS_VARIABLES.HEADER_HEIGHT, `${this.headerHeight}px`);
  }
  
  private async _loadIcon(): Promise<void> {
    if (this.iconSvg) {
      this.loadedIconSvg = this.iconSvg;
      return;
    }
    
    if (this.iconUrl) {
      this.loadedIconSvg = await loadIconFromUrl(this.iconUrl);
      this.requestUpdate();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleGlobalKeydown.bind(this));
    if (this.panelMode) {
      removePanelModeStyles();
    }
    document.documentElement.style.removeProperty(CSS_VARIABLES.HEADER_HEIGHT);
  }

  // Event handlers
  private _handleGlobalKeydown(e: KeyboardEvent): void {
    if ((e.ctrlKey || e.metaKey) && e.key === KEYBOARD_SHORTCUTS.TOGGLE) {
      e.preventDefault();
      if (this.currentMode === 'min') {
        this._expandToMaxMode();
      } else {
        this.currentMode = 'min';
        this.setOpen(false);
      }
    }
  }

  private _expandToMaxMode(): void {
    this.currentMode = 'max';
    this.setOpen(true);
    this.panelMode = this.lastExpandedMode === 'panel';
    this.requestUpdate();
    
    if (this.panelMode) {
      applyPanelModeStyles(this.headerHeight);
    }
    
    this.updateComplete.then(() => {
      const newInput = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
      if (newInput) {
        newInput.focus();
      }
    });
  }

  private _toggleExpanded(): void {
    const wasOpen = this.open;
    
    if (!wasOpen) {
      this._openExpanded();
    } else {
      this.lastExpandedMode = this.panelMode ? 'panel' : 'dialog';
      this.setOpen(false);
    }
  }

  private _openExpanded(): void {
    this.setOpen(true);
    this.panelMode = this.lastExpandedMode === 'panel';
    this.requestUpdate();
    
    document.documentElement.style.setProperty(CSS_VARIABLES.HEADER_HEIGHT, `${this.headerHeight}px`);
    if (this.panelMode) {
      document.body.style.marginRight = PANEL_MARGIN_RIGHT;
      document.body.style.transition = PANEL_TRANSITION_DURATION;
    }
    
    this.updateComplete.then(() => {
      const input = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
      if (input) {
        input.focus();
        this.inputFocused = true;
        this.requestUpdate();
      }
    });
  }

  private _handleSendMessage(): void {
    if (!this.isSubmittable) return;
    
    const input = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
    if (input && input.value.trim()) {
      const messageText = input.value;
      const sanitizedMessage = sanitizeText(messageText);
      this.messages = [...this.messages, { type: 'user', text: sanitizedMessage }];
      this.requestUpdate();
      this.updateComplete.then(() => this._scrollToBottom());
      this.dispatchEvent(new CustomEvent('message', { detail: { query: sanitizedMessage } }));
      input.value = '';
    }
    
    if (!this.open) {
      this._expandOnSend();
    }
  }

  private _expandOnSend(): void {
    this.setOpen(true);
    this.panelMode = this.lastExpandedMode === 'panel';
    this.requestUpdate();
    
    if (this.panelMode) {
      applyPanelModeStyles(this.headerHeight);
    }
    
    this.inputFocused = false;
    this.updateComplete.then(() => {
      const newInput = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
      if (newInput) {
        newInput.focus();
      }
    });
  }

  private _handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter' && this.isSubmittable) {
      this._handleSendMessage();
    }
  }

  private _handleInputFocus(): void {
    this.inputFocused = true;
    this.requestUpdate();
  }

  private _handleInputBlur(): void {
    this.inputFocused = false;
    this.requestUpdate();
  }

  private _handleBackdropClick(e: MouseEvent): void {
    if (this.open && e.target === this.shadowRoot?.querySelector(`.${CSS_CLASSES.BACKDROP}`)) {
      this.setOpen(false);
    }
  }

  private _handleCopyMessage(text: string, event: Event): void {
    event.stopPropagation();
    
    copyToClipboard(text).catch(err => {
      console.error('Failed to copy message:', err);
    });
  }

  private _handlePanelToggle(): void {
    this.panelMode = !this.panelMode;
    this.lastExpandedMode = this.panelMode ? 'panel' : 'dialog';
    this.requestUpdate();
    
    if (this.panelMode) {
      applyPanelModeStyles(this.headerHeight);
    } else {
      removePanelModeStyles();
    }
    
    this.updateComplete.then(() => {
      const input = this.shadowRoot?.querySelector(`.${CSS_CLASSES.INPUT_FIELD}`) as HTMLInputElement;
      if (input) {
        input.focus();
        this.inputFocused = true;
        this.requestUpdate();
      }
    });
  }

  // Render method
  render() {
    return html`
      <div class="${CSS_CLASSES.BACKDROP} ${this.open ? CSS_CLASSES.VISIBLE : ''} ${this.panelMode ? CSS_CLASSES.PANEL_MODE : ''}" @click=${this._handleBackdropClick}></div>
      <div class="${CSS_CLASSES.CONTAINER} ${this.open ? CSS_CLASSES.EXPANDED : ''} ${this.panelMode ? CSS_CLASSES.PANEL_MODE : ''} ${this.inputFocused ? CSS_CLASSES.INPUT_FOCUSED : ''}">
        ${this.open ? html`
          <div class="${CSS_CLASSES.HEADER_BAR}">
            <h2 class="${CSS_CLASSES.HEADER_TITLE}">${this.conversationTitle}</h2>
          </div>
          <div class="${CSS_CLASSES.MESSAGE_CONTAINER}">
            ${this.messages.map(msg => html`
              <div class="${CSS_CLASSES.MESSAGE} ${msg.type}-message">
                <div class="message-text" .innerHTML=${this._parseMessageContent(msg.text, msg.type === 'user')}></div>
                ${msg.type === 'agent' ? html`
                  <button class="${CSS_CLASSES.COPY_BUTTON}" @click=${(e: Event) => this._handleCopyMessage(msg.text, e)} title="Copy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                ` : ''}
              </div>
            `)}
            ${this.isTyping ? html`
              <div class="${CSS_CLASSES.MESSAGE} agent-message">
                <span class="${CSS_CLASSES.TYPING_INDICATOR}">
                  <span></span><span></span><span></span>
                </span>
              </div>
            ` : ''}
          </div>
        ` : ''}
        <div class="${CSS_CLASSES.INPUT_CONTAINER}">
          <div class="${CSS_CLASSES.INPUT_WRAPPER}">
            ${this.loadedIconSvg ? html`
              <div class="input-prefix">
                <div .innerHTML=${this.loadedIconSvg}></div>
              </div>
            ` : ''}
            <input 
              class="${CSS_CLASSES.INPUT_FIELD}" 
              type="text" 
              placeholder=${this.placeholderText}
              @keydown=${this._handleKeydown}
              @focus=${this._handleInputFocus}
              @blur=${this._handleInputBlur}
            />
            <button class="${CSS_CLASSES.SEND_BUTTON}" ?disabled=${!this.isSubmittable} @click=${this._handleSendMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
            </button>
          </div>
        </div>
        <button class="${CSS_CLASSES.TOGGLE_BUTTON}" @click=${this._toggleExpanded} title=${this.open ? 'Collapse' : 'Expand'}>
          ${this.open ? html`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ` : html`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          `}
        </button>
        ${this.open ? html`
          <button class="${CSS_CLASSES.PANEL_TOGGLE_BUTTON}" @click=${this._handlePanelToggle} title=${this.panelMode ? 'Switch to dialog mode' : 'Switch to panel mode'}>
            ${this.panelMode ? html`
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left-icon lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>
            ` : html`
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-icon lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
            `}
          </button>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'agent-ui-2': AgentUI2;
  }
}