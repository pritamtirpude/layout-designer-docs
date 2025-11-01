---
sidebar_position: 6
---

# Key Components Involved

## CanvasContainer

Acts as the visual drop area or design surface. This is where the user drags and drops controls.

## DesignerTopbar & DesignerSidebarTabs

Provide a UI for selecting components and editing their properties.

## RootContainer, Container, Row, ColumnContainer

These layout components serve as structural elements within the drag-and-drop canvas.

## DevExtreme Controls (e.g., DxTextBox, DxGrid, DxScheduler)

Custom-wrapped DevExtreme components made editable and draggable by wrapping them with Craft.js's `useNode()`.
