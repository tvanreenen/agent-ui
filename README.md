# Agent-UI

A modern, accessible chat widget component for AI agents built with Lit and TypeScript. Built as a web component with shadow DOM for encapsulation, making it perfect for integrating AI assistants into any web application.

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
  placeholderText: string      // Input placeholder text
});
```

### Methods

```javascript
widget.addMessage('user', 'Hello');     // Add user message
widget.addMessage('agent', 'Hi there!'); // Add agent response
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

## Development

```bash
npm install
npm start      # Start development server
npm run build  # Build for production
```

See `examples/demo.html` for a complete working example.

