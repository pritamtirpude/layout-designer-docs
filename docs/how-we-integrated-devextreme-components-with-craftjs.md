---
sidebar_position: 9
---

# How We Integrated DevExtreme Components with Craft.js

To enable drag-and-drop support for DevExtreme UI components (like DxTextBox, DxGrid, DxChart, etc.) inside the Craft.js editor, we followed a wrapper-based integration approach.

These DevExtreme components are not Craft.js-aware by default, so we wrapped each one using Craft.js's `useNode()` hook to give them:

• **Editable props**
• **Selectable behavior**
• **Draggable capability**
• **Canvas nesting (if needed)**
