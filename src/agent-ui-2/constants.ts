export const PANEL_WIDTH = 400;
export const PANEL_MARGIN_RIGHT = `${PANEL_WIDTH}px`;
export const TRANSITION_DURATION = '0.4s ease';
export const PANEL_TRANSITION_DURATION = '0.8s cubic-bezier(0.4, 0, 0.2, 1)';

export const CSS_VARIABLES = {
  HEADER_HEIGHT: '--agent-ui-header-height',
  BRAND_COLOR: '--agent-ui-brand-color',
  BRAND_COLOR_LIGHT: '--agent-ui-brand-color-light'
} as const;

export const KEYBOARD_SHORTCUTS = {
  TOGGLE: 'k'
} as const;

export const CSS_CLASSES = {
  BACKDROP: 'backdrop',
  CONTAINER: 'container',
  EXPANDED: 'expanded',
  PANEL_MODE: 'panel-mode',
  VISIBLE: 'visible',
  INPUT_FOCUSED: 'input-focused',
  MESSAGE: 'message',
  USER_MESSAGE: 'user-message',
  AGENT_MESSAGE: 'agent-message',
  MESSAGE_CONTAINER: 'message-container',
  INPUT_CONTAINER: 'input-container',
  INPUT_WRAPPER: 'input-wrapper',
  INPUT_FIELD: 'input-field',
  SEND_BUTTON: 'send-button',
  TOGGLE_BUTTON: 'toggle-button',
  PANEL_TOGGLE_BUTTON: 'panel-toggle-button',
  COPY_BUTTON: 'copy-button',
  TYPING_INDICATOR: 'typing-indicator',
  HEADER_BAR: 'header-bar',
  HEADER_TITLE: 'header-title'
} as const; 