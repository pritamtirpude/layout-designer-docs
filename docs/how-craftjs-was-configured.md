---
sidebar_position: 7
---

# How Craft.js Was Configured

We initialized Craft.js using:

• **`<Editor />`** — the main context provider.
• **resolver** — a mapping of component names to React components.
• **`<CanvasContainer />`** — the central editable canvas using Frame and Element components from Craft.js.

We ensured:

• All dynamic components were registered inside the resolver.
• Craft.js drag-and-drop functionality was correctly applied using `useNode()` inside each component wrapper.
