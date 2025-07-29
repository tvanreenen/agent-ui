.PHONY: start build

# Start the development server
start:
	npm start

# Build and copy the UMD bundle to examples directory
build:
	npm run build && cp dist/agent-ui.umd.js dist/agent-ui.umd.js.map examples/