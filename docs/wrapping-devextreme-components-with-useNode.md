---
sidebar_position: 11
---

# Wrapping DevExtreme Components with useNode

Each DevExtreme component is made Craft.js-compatible by using the `useNode()` hook. Here's an example of how we wrap a DxTextBox:

```jsx
import { useNode } from "@craftjs/core";
import TextBox from "devextreme-react/text-box";

export const DxTextBox = ({ value, onValueChanged }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <TextBox value={value} onValueChanged={onValueChanged} />
    </div>
  );
};

DxTextBox.craft = {
  displayName: "DxTextBox",
  props: {
    value: "Default Text",
  },
  rules: {
    canDrag: () => true,
  },
};
```
