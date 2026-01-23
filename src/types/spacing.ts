/**
 * Type definitions for the spacing system
 */

export type SpacingSize = 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'section'

export type SpacingType = 'padding' | 'margin' | 'gap' | 'space'

export type SectionSpacingVariant = 'normal' | 'large' | 'xlarge'

export type CardSpacingVariant = 'compact' | 'normal' | 'spacious'

export type GridGapVariant = 'tight' | 'normal' | 'loose'

export type ResponsiveBreakpoint = 'mobile' | 'tablet' | 'desktop'

/**
 * Props interface for components that use spacing
 */
export interface SpacingProps {
  spacing?: SectionSpacingVariant
  className?: string
}

/**
 * Props interface for card components
 */
export interface CardSpacingProps {
  padding?: CardSpacingVariant
  className?: string
}

/**
 * Props interface for grid components
 */
export interface GridSpacingProps {
  gap?: GridGapVariant
  className?: string
}

/**
 * Basic Tailwind spacing classes
 */
export type TailwindSpacingClass = string

/**
 * Responsive spacing class type
 */
export type ResponsiveSpacingClass = string