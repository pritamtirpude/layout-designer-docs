---
sidebar_position: 8
---

# Dynamic Layout Loading

We also support loading layouts from a backend API using `LayoutManager.getLayout()`. This layout is set in state and rendered inside the Craft.js canvas, allowing:

• **Persistence of design state**
• **Dynamic updates based on user roles or preferences**
• **View-mode vs design-mode rendering**

## Implementation Overview

Our dynamic layout loading system provides a flexible architecture that separates layout data from the rendering logic, enabling powerful features for both developers and end users.

### Layout Data Structure

The layout data is stored as a serialized JSON representation of the Craft.js node tree. This includes:

• **Component hierarchy** - Parent-child relationships between components
• **Component properties** - All props and configuration for each component
• **Styling information** - Layout-specific styles and positioning
• **Custom metadata** - Additional data for business logic

### Loading Process

The layout loading follows a structured workflow:

1. **API Request** - `LayoutManager.getLayout()` fetches layout data from the backend
2. **State Management** - Layout data is stored in React state for easy access
3. **Validation** - Ensure the layout structure is compatible with current components
4. **Rendering** - Craft.js processes the data and renders the components

### Benefits of Dynamic Loading

#### For Users

• **Seamless experience** - Layouts load quickly and smoothly
• **Personalization** - Different layouts based on user preferences
• **Real-time updates** - Changes reflect immediately without page refresh
• **Cross-device consistency** - Same layout across different devices

#### For Developers

• **Separation of concerns** - Layout data is independent from component logic
• **Version control** - Track layout changes over time
• **A/B testing** - Easy to switch between different layout versions
• **Scalability** - Handle multiple layouts without code changes

### Mode Switching

Our implementation supports seamless switching between different modes:

#### Design Mode

• Full editing capabilities with drag-and-drop
• Property panels for component configuration
• Real-time preview of changes
• Save/publish functionality

#### View Mode

• Read-only rendering for end users
• Optimized performance without editing overhead
• Clean interface without design tools
• Focus on content consumption

### Error Handling

The system includes robust error handling for:

• **Missing components** - Graceful fallback when components aren't available
• **Invalid data** - Validation and sanitization of layout data
• **Network issues** - Retry mechanisms and offline fallbacks
• **Version conflicts** - Compatibility checks between layout and component versions

### Performance Optimization

To ensure optimal performance:

• **Lazy loading** - Components load only when needed
• **Caching** - Frequently used layouts are cached locally
• **Compression** - Layout data is compressed for faster transmission
• **Minimal re-renders** - Only affected components update when layouts change
