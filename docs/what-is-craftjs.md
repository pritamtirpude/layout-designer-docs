---
sidebar_position: 2
---

# What is Craft.js?

Craft.js is a headless framework for building drag-and-drop page editors in React. It provides a set of tools to turn your React components into building blocks that users can visually compose and arrange, similar to what you see in tools like Webflow or Builder.io.

**In short**: Craft.js turns your React app into a low-code/no-code builder.

## Core Features

Craft.js gives you:

• **Built-in state management** keeps track of all the nodes (components) on the canvas, their structure, styles, props, and relationships. A drag-and-drop user interface powered by the underlying React components.

• **Complete freedom** to design your own editor UI.

• **Seamless integration** with existing React components using a declarative API. You wrap your components with Craft.js utilities like `useNode()` to make them editable.

• **Intuitive user experience** where users can drag components onto a canvas, re-arrange them, and nest them — just like building with blocks.

• **Easy serialization** - you can easily serialize the current layout to JSON and restore it — ideal for saving/loading layouts from a database.

• **Framework-agnostic** approach in terms of styling and components – you bring your own UI.

## Key Concepts

### Nodes

In Craft.js, everything is a **Node**. A Node represents a React component instance within the editor. Each Node contains:

- Component type and props
- Parent-child relationships
- Custom settings and rules
- Display information

### Canvas

The **Canvas** is the main area where users interact with components. It acts as a container that:

- Handles drag-and-drop interactions
- Manages component selection and highlighting
- Provides visual feedback during editing

### Resolver

The **Resolver** is a registry that maps component names to their actual React components. This allows Craft.js to:

- Dynamically render components from serialized data
- Maintain component definitions across sessions
- Enable component reusability

## What Makes Craft.js Unique

### Headless Design

Unlike other page builders, Craft.js doesn't dictate how your editor should look. You have complete control over the user interface and user experience.

### React-First Approach

Built specifically for React, Craft.js leverages React's component lifecycle, hooks, and virtual DOM for optimal performance.

### Component-Based Architecture

Craft.js treats everything as React components, making it natural for React developers to understand and extend.
