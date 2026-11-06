# Agent Instructions — Element Lab

This repository is a teaching example of Vue 3 + Element Plus + shadcn-vue compatible Registry.

- Keep UI components in `src/components/`, reusable page templates in `src/templates/`.
- Do NOT edit Element Plus source code or files in node_modules.
- Use Element Plus primitives in our wrappers. Prefer small `script setup` components with typed props and meaningful examples.
- For any addition/removal/rename of a distributable component, update `registry.json` and run `npm test`.
- For any component edit, run `npm run registry:build` to regenerate `public/r/*.json`.
- Never claim MCP can modify code itself: an editing agent edits files, MCP provides Registry discovery and install capabilities.
- Always ask for a visual review of behavior and responsive layout before publishing.
- Design decisions: accessible labels, descriptive component names, minimal custom CSS, sensible defaults.
