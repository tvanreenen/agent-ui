# Agent-UI

A modern, accessible chat widget component for AI agents built with Lit and TypeScript. Perfect for integrating AI assistants web applications.

## Features

### 🎯 Core Functionality
- **Expandable chat interface** - Smooth animations between collapsed and expanded states
- **Keyboard shortcuts** - `Ctrl/Cmd + K` to focus input, `Esc` to collapse
- **Auto-scroll** - Automatically scrolls to latest messages
- **Message management** - Built-in message display and styling
- **Responsive design** - Works on desktop, tablet, and mobile

### 🎨 UI/UX
- **Smooth animations** - CSS Grid-based height transitions
- **Modern design** - Clean, professional appearance
- **Accessible** - Proper ARIA attributes and keyboard navigation
- **Customizable** - Easy to style and brand
- **Sample queries** - Clickable suggestion buttons when expanded

### 🔧 Developer Experience
- **TypeScript** - Full type safety
- **Web Components** - Framework-agnostic
- **Shadow DOM** - Encapsulated styling
- **Event-driven** - Clean API for integration
- **Source maps** - Easy debugging

## Quick Start

### Installation

```bash
npm install
npm run build
```

### Basic Usage

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
      ]
    });

    // Listen for user messages
    widget.addEventListener('message', (e) => {
      const userQuery = e.detail.query;
      console.log('User asked:', userQuery);
      
      // Process with your AI agent
      // Then respond:
      widget.addMessage('Agent', 'I can help you with that!');
    });
  </script>
</body>
</html>
```

## API Reference

### Initialization

```javascript
const widget = AgentUI.init({
  prompts: string[] // Array of suggestion queries
});
```

### Methods

#### `addMessage(type, text)`
Add a message to the chat.

```javascript
widget.addMessage('User', 'Hello Kareem');
widget.addMessage('Agent', 'Hello! How can I help?');
```

**Parameters:**
- `type` - `'user'` or `'kareem'`
- `text` - Message content

#### `setOpen(boolean)`
Programmatically control widget expansion.

```javascript
widget.setOpen(true);  // Expand
widget.setOpen(false); // Collapse
```

### Events

#### `message`
Fired when user sends a message or clicks a suggestion.

```javascript
widget.addEventListener('message', (e) => {
  const userQuery = e.detail.query;
  // Handle the query
});
```

**Event detail:**
- `query` - The user's message text

### Keyboard Shortcuts

- **`Ctrl/Cmd + K`** - Focus the input field
- **`Esc`** - Collapse the widget (when expanded)
- **`Enter`** - Send message

## Customization

### Styling

The widget uses CSS custom properties and can be styled via CSS:

```css
agent-ui {
  --primary-color: #702c62;
  --secondary-color: #125361;
  --background-color: white;
  --border-radius: 12px;
}
```

### Placeholder Text

Update the placeholder text in `src/agent-ui.ts`:

```typescript
placeholder="Ask Kareem to find data, perform actions, or get insights - he can do almost anything"
```

### Suggestions

Customize the suggestion prompts:

```javascript
const widget = AgentUI.init({
  prompts: [
    'Your custom suggestion 1',
    'Your custom suggestion 2',
    'Your custom suggestion 3'
  ]
});
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Build Process

The project uses esbuild for fast compilation:

- **TypeScript** → JavaScript
- **Minification** for production
- **Source maps** for debugging
- **UMD format** for universal compatibility

### Browser Support

- Chrome 67+
- Firefox 63+
- Safari 11.1+
- Edge 79+

## Examples

### Basic Integration

See `examples/demo.html` for a complete working example.

### Advanced Usage

```javascript
// Custom message handling
widget.addEventListener('message', async (e) => {
  const query = e.detail.query;
  
  // Show typing indicator
  widget.addMessage('kareem', '...');
  
  try {
    // Call your AI service
    const response = await callAIService(query);
    
    // Replace typing indicator with response
    widget.messages.pop(); // Remove typing indicator
    widget.addMessage('kareem', response);
  } catch (error) {
    widget.addMessage('kareem', 'Sorry, I encountered an error. Please try again.');
  }
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Roadmap

- [ ] Streaming message support
- [ ] File upload capabilities
- [ ] Rich message formatting
- [ ] Voice input support
- [ ] Multi-language support
- [ ] Advanced theming system
- [ ] Analytics integration
- [ ] Accessibility improvements

