# Spacing System Documentation

## Overview

This portfolio uses an 8px grid-based spacing system that ensures consistent visual hierarchy and responsive design. The system follows industry standards and provides a comprehensive set of tokens and utilities.

## Core Principles

### 8px Grid System
- **Base Unit**: 8px (0.5rem)
- **Micro Spacing**: 4px (for very close elements)
- **Standard Increments**: 8px, 16px, 24px, 32px, 48px, 80px

### Responsive Design
- **Mobile First**: Start with mobile spacing, enhance for larger screens
- **Consistent Ratios**: Maintain proportional spacing across breakpoints
- **Touch Friendly**: Ensure adequate touch targets on mobile (44px minimum)

## Spacing Tokens

```typescript
const spacing = {
  micro: '4px',     // Very close elements
  small: '8px',     // Related elements  
  medium: '16px',   // Standard separation
  large: '24px',    // Group separation
  xl: '32px',       // Card separation
  xxl: '48px',      // Component separation
  section: '80px'   // Section separation
}
```

## Usage Examples

### Section Spacing
```tsx
// Use predefined section spacing variants
<section className="section-spacing-normal">
  {/* 64px mobile, 80px desktop */}
</section>

<section className="section-spacing-large">
  {/* 80px mobile, 96px desktop */}
</section>
```

### Card Spacing
```tsx
// Use predefined card spacing variants
<div className="card-spacing-normal">
  {/* 24px padding (recommended) */}
</div>

<div className="card-spacing-compact">
  {/* 16px padding */}
</div>
```

### Grid Layouts
```tsx
// Use predefined grid gap variants
<div className="grid grid-cols-1 md:grid-cols-2 grid-gap-normal">
  {/* 24px mobile, 32px desktop gap */}
</div>
```

### Custom Spacing
```tsx
// Use Tailwind classes directly
<div className="p-6 gap-8 space-y-4">
  {/* 24px padding, 32px gap, 16px vertical spacing */}
</div>
```

## Utility Functions

### getSpacingClass
```typescript
import { getSpacingClass } from '../utils/spacing'

const paddingClass = getSpacingClass('padding', 'large') // Returns 'p-3'
```

### getResponsiveGap
```typescript
import { getResponsiveGap } from '../utils/spacing'

const gapClass = getResponsiveGap('medium', 'large', 'xl')
// Returns 'gap-2 tablet:gap-3 desktop:gap-4'
```

## Component Integration

### SectionContainer (Coming Soon)
```tsx
<SectionContainer spacing="large">
  <h2>Section Title</h2>
  <p>Section content...</p>
</SectionContainer>
```

### Card Component (Coming Soon)
```tsx
<Card variant="project" padding="normal">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

## Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '0px',      // < 768px
  tablet: '768px',    // 768px - 1023px  
  desktop: '1024px'   // >= 1024px
}
```

## CSS Utility Classes

### Spacing Utilities
- `.spacing-micro` - 4px vertical spacing
- `.spacing-small` - 8px vertical spacing
- `.spacing-medium` - 16px vertical spacing
- `.spacing-large` - 24px vertical spacing
- `.spacing-xl` - 32px vertical spacing
- `.spacing-xxl` - 48px vertical spacing

### Section Utilities
- `.section-spacing-normal` - Standard section padding
- `.section-spacing-large` - Large section padding
- `.section-spacing-xlarge` - Extra large section padding

### Card Utilities
- `.card-spacing-compact` - 16px padding
- `.card-spacing-normal` - 24px padding (recommended)
- `.card-spacing-spacious` - 32px padding

### Grid Utilities
- `.grid-gap-tight` - 16px mobile, 24px desktop
- `.grid-gap-normal` - 24px mobile, 32px desktop (recommended)
- `.grid-gap-loose` - 32px mobile, 48px desktop

## Best Practices

### Do's
✅ Use predefined spacing variants when possible
✅ Follow the 8px grid system
✅ Test spacing on all breakpoints
✅ Use semantic spacing (micro for related elements, xl for cards)
✅ Maintain consistent spacing within component types

### Don'ts
❌ Use arbitrary spacing values outside the grid system
❌ Mix different spacing systems
❌ Ignore responsive behavior
❌ Use excessive spacing that breaks visual hierarchy
❌ Forget to test touch targets on mobile

## Migration Guide

When updating existing components:

1. **Identify Current Spacing**: Note existing padding, margins, and gaps
2. **Map to Grid System**: Find the closest 8px grid value
3. **Apply Responsive Classes**: Use mobile-first responsive classes
4. **Test Across Breakpoints**: Verify spacing works on all screen sizes
5. **Use Utility Classes**: Prefer predefined utilities over custom values

## Validation

Use the spacing utilities to validate your implementation:

```typescript
import { isValidGridSpacing, roundToGrid } from '../utils/spacing'

// Check if a value follows the grid
isValidGridSpacing(24) // true
isValidGridSpacing(25) // false

// Round to nearest grid value
roundToGrid(25) // 24
roundToGrid(30) // 32
```

## Testing

The spacing system includes a test component for visual verification:

```tsx
import SpacingTest from '../test/spacing-test'

// Use in development to verify spacing system
<SpacingTest />
```

This component shows all spacing tokens, variants, and provides visual examples of the spacing system in action.