---
sidebar_position: 5
---

# How We Have Used Craft.js in Our Application

In our React application, we have used Craft.js as the core framework to power a fully custom drag-and-drop UI editor. This allows users to visually design pages using reusable UI components — including both standard and DevExtreme components — all wrapped in a modular and context-aware architecture.

At the root level of our editor page (DesignerMain component), we wrap the editable region with Craft.js's `<Editor>` component. Inside it, we provide a resolver object, which defines all the components that can be used inside the canvas.

```jsx
<Editor
  resolver={{
    DXButton,
    Container,
    Row,
    ColumnContainer,
    GridControl,
    ...
  }}
>
```

This enables the dynamic rendering and editing of components within the page editor.
