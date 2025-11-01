---
sidebar_position: 10
---

# Registering DevExtreme Components in Craft.js Resolver

In the main `<Editor />` block of DesignerMain.tsx, we register all Craft-compatible components using the resolver prop.

```jsx
<Editor
  resolver={{
    DxTextBox,
    DxGrid,
    DxDateTimeControl,
    DxCheckBox,
    DxChart,
    ...
  }}
>
```
