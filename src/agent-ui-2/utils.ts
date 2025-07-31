import { marked } from 'marked';
import DOMPurify from 'dompurify';

export function parseMarkdown(content: string): string {
  try {
    marked.setOptions({
      breaks: true, // Convert line breaks to <br>
      gfm: true    // GitHub Flavored Markdown
    });
    const result = marked.parse(content);
    const html = typeof result === 'string' ? result : String(result);
    return sanitizeHTML(html);
  } catch (error) {
    console.warn('Markdown parsing failed:', error);
    return sanitizeText(content); // Fallback to plain text
  }
}

export function sanitizeText(text: string): string {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
}

export function sanitizeHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      // Headers
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      // Text formatting
      'strong', 'b', 'em', 'i',
      // Lists
      'ul', 'ol', 'li',
      // Links
      'a',
      // Blockquotes
      'blockquote',
      // Line breaks
      'br', 'p',
      // Code blocks
      'code', 'pre',
      // Tables
      'table', 'thead', 'tbody', 'tr', 'th', 'td'
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel', 'class', 'id'
    ],
    ALLOW_DATA_ATTR: false,
    KEEP_CONTENT: true
  });
}

export async function loadIconFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    } else {
      console.warn(`Failed to load icon from URL: ${url}`);
      return '';
    }
  } catch (error) {
    console.warn(`Error loading icon from URL: ${url}`, error);
    return '';
  }
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function applyPanelModeStyles(headerHeight: number): void {
  document.body.style.marginRight = '400px';
  document.body.style.transition = 'margin-right 0.4s ease';
  document.documentElement.style.setProperty('--agent-ui-header-height', `${headerHeight}px`);
}

export function removePanelModeStyles(): void {
  document.body.style.marginRight = '0';
  // Remove transition after animation completes
  setTimeout(() => {
    document.body.style.transition = '';
  }, 400);
  // Keep the header height CSS variable for dialog mode
} 