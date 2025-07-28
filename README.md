# Agent-UI

A modern, accessible chat widget component for AI agents built with Lit and TypeScript. Built as a web component with shadow DOM for encapsulation, making it perfect for integrating AI assistants into any web application.

## Features

- **Web Component**: Built with Lit for easy integration
- **TypeScript**: Full type safety and IntelliSense support
- **Responsive Design**: Works on desktop and mobile
- **Keyboard Shortcuts**: Ctrl/Cmd + K to focus, Esc to collapse
- **Customizable**: Brand colors, agent name, placeholder text
- **Markdown Support**: Built-in rich text formatting with streaming
- **Security**: DOMPurify sanitization for XSS protection

## Quick Start

```bash
npm install && npm run build
```

```html
<!DOCTYPE html>
<html>
<head>
  <script src="dist/agent-ui.umd.js"></script>
</head>
<body>
  <script>
    const widget = AgentUI.init({
      prompts: [
        'Explain the dashboard widgets',
        'Analyze my account health', 
        'Show me what actions you can perform'
      ],
      agentName: 'Tim',
      placeholderText: 'Ask Tim to find data, perform actions, or get insights - he can do almost anything'
    });

    widget.addEventListener('message', (e) => {
      const userQuery = e.detail.query;
      console.log('User asked:', userQuery);
      
      // Process with your AI agent, then respond:
      widget.addMessage('agent', 'I can help you with that!');
    });
  </script>
</body>
</html>
```

## API

### Initialization

```javascript
const widget = AgentUI.init({
  prompts: string[],           // Array of suggestion queries
  agentName: string,           // Name of your AI agent
  placeholderText: string,     // Input placeholder text
  iconSvg?: string,           // Custom SVG icon (raw SVG string)
  iconUrl?: string            // Custom SVG icon (URL)
});
```

### Methods

```javascript
widget.replaceLastMessage('Full message content');  // Replace last agent message
widget.appendToLastMessage('Streaming content...'); // Append to last agent message
widget.setTyping(true);                            // Show typing indicator
widget.setTyping(false);                           // Hide typing indicator
```

### Events

```javascript
widget.addEventListener('message', (e) => {
  const userQuery = e.detail.query; // User's message text
  // Handle the query
});
```

### Keyboard Shortcuts

- **`Ctrl/Cmd + K`** - Focus the input field
- **`Esc`** - Collapse the widget (when expanded)
- **`Enter`** - Send message

## Configuration

```javascript
const widget = AgentUI.init({
  prompts: ['Your suggestion 1', 'Your suggestion 2', 'Your suggestion 3'],
  agentName: 'Tim',  // Messages will show "Tim:" instead of "Agent:"
  placeholderText: 'Ask Tim to find data, perform actions, or get insights'
});
```

### Customize Styling

```css
agent-ui {
  --primary-color: #702c62;      /* Main brand color */
  --secondary-color: #125361;    /* Secondary color */
  --background-color: white;     /* Background color */
  --border-radius: 12px;         /* Corner radius */
}
```

## Security

The component includes comprehensive security features to prevent XSS attacks:

### Input Sanitization
- **User messages** are sanitized before display using DOMPurify
- **Agent responses** are sanitized after markdown parsing
- **Whitelist approach** - only safe HTML tags are allowed

### Allowed HTML Tags
```javascript
// Safe elements that are preserved:
h1, h2, h3, h4, h5, h6          // Headers
strong, b, em, i, code, pre      // Text formatting
ul, ol, li                       // Lists
a                                // Links (with href sanitization)
blockquote                       // Blockquotes
br, p                            // Line breaks
div                              // Code blocks
```

### Markdown Security
- Markdown is parsed safely with `marked`
- HTML output is sanitized with DOMPurify
- Fallback to plain text if parsing fails

## Development

```bash
npm install
npm start      # Start development server
npm run build  # Build for production
```

See `examples/demo.html` for a complete working example.

