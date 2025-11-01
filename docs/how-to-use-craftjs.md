---
sidebar_position: 4
---

# How to Use Craft.js

Here's a simplified step-by-step usage flow:

## a. Installation

```bash
npm install @craftjs/core
```

## b. Setup Editor Context

Wrap your editable components with the `<Editor />` context:

```javascript
import { Editor, Frame, Element } from "@craftjs/core";

function MyEditor() {
  return (
    <Editor resolver={{ Text, Container }}>
      <Frame>
        <Element is={Container} canvas>
          <Text text="Hello world!" />
        </Element>
      </Frame>
    </Editor>
  );
}
```

## c. Create Editable Components

Components must use useNode from Craft.js to become editable:

```javascript
import { useNode } from "@craftjs/core";

const Text = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return <p ref={(ref) => connect(drag(ref))}>{text}</p>;
};
```

## d. Canvas Component

To allow nesting and drag-and-drop inside a component, mark it with canvas:

```javascript
<Element is={Container} canvas>
  {/* other components */}
</Element>
```
