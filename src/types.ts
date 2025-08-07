export interface Message {
  type: 'user' | 'agent';
  text: string;
}

export type DisplayMode = 'min' | 'max';
export type ExpandedMode = 'dialog' | 'panel';

export interface AgentUIProperties {
  prompts: string[];
  agentName: string;
  placeholderText: string;
  iconSvg: string;
  iconUrl: string;
  headerHeight: number;
  conversationTitle: string;
}

export interface MessageEventDetail {
  query: string;
} 