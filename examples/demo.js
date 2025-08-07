function logEvent(message, type = 'info') {
    const log = document.getElementById('eventLog');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
} 

function getRandomResponse() {
    const responses = [
        "I understand you're asking about that. Let me help you with that request.",
        "That's an interesting question! Here's what I can tell you about that.",
        "I can definitely help with that. Let me gather some information for you.",
        "Thanks for reaching out! I'm processing your request now.",
        "I see what you're looking for. Let me work on that for you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function getXSSResponse() {
    return `# XSS Protection Demo

This example shows how the component handles potentially malicious content:

- ✅ Script tags are stripped: <script>alert('XSS')<\/script>
- ✅ Event handlers removed: <img src="x" onerror="alert('XSS')">
- ✅ Safe markdown preserved: **bold** and *italic*`;
}

function getMarkdownResponse() {
    return '# Markdown Streaming Example\n\nThis demonstrates **rich text formatting** with streaming support!\n\n## Features:\n- ✅ **Bold text** and *italic text*\n- 🔄 Real-time markdown parsing\n- 📝 Code blocks: `console.log("Hello!")`\n- 🎨 Lists and formatting\n- 📊 **Tables** (new!)\n\n> This is a blockquote that shows how the component handles different markdown elements while streaming.\n\n```javascript\n// Code blocks work too!\nfunction streamingExample() {\n  return "Markdown + Streaming = Awesome!";\n}\n```\n\n## Data Table Example\n\n| Feature | Status | Description |\n|---------|--------|-------------|\n| **Bold Text** | ✅ Working | Supports **bold** formatting |\n| *Italic Text* | ✅ Working | Supports *italic* formatting |\n| `Code Inline` | ✅ Working | Inline code with backticks |\n| [Links](https://example.com) | ✅ Working | Clickable links |\n| Tables | ✅ Working | Full table support with headers |\n| Lists | ✅ Working | Both ordered and unordered |\n| Blockquotes | ✅ Working | > Like this one |\n\n[Learn more about markdown](https://example.com)';
}