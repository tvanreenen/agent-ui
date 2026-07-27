import { afterEach, describe, expect, it, vi } from 'vitest';
import { marked } from 'marked';
import { parseMarkdown, sanitizeHTML, sanitizeText } from '../src/utils.ts';

function compact(html: string): string {
  return html.replace(/\s+/g, ' ').trim();
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('sanitizeText', () => {
  it('strips tags and attributes from plain text content', () => {
    expect(sanitizeText('<img src=x onerror=alert(1)>hello')).toBe('hello');
  });
});

describe('sanitizeHTML', () => {
  it('keeps allowed formatting while stripping unsafe content', () => {
    const html = sanitizeHTML(
      '<p><strong>safe</strong> <a href="https://example.com" onclick="evil()">link</a><script>alert(1)</script></p>'
    );

    expect(html).toContain('<strong>safe</strong>');
    expect(html).toContain('<a href="https://example.com">link</a>');
    expect(html).not.toContain('onclick');
    expect(html).not.toContain('<script');
  });
});

describe('parseMarkdown', () => {
  it('renders markdown into sanitized html', () => {
    const html = compact(
      parseMarkdown('# Title\n\n- one\n- two\n\n`code`\n\n| a | b |\n| - | - |\n| 1 | 2 |')
    );

    expect(html).toContain('<h1>Title</h1>');
    expect(html).toContain('<ul>');
    expect(html).toContain('<code>code</code>');
    expect(html).toContain('<table>');
  });

  it('preserves line breaks via markdown rendering', () => {
    const html = compact(parseMarkdown('line one\nline two'));

    expect(html).toContain('line one<br>line two');
  });

  it('falls back to sanitized text when markdown parsing throws', () => {
    vi.spyOn(marked, 'parse').mockImplementation(() => {
      throw new Error('boom');
    });

    const html = parseMarkdown('<script>alert(1)</script>safe');

    expect(html).toBe('safe');
  });
});
