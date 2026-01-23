/**
 * Spacing Utility Functions
 * 
 * Helper functions for working with the 8px grid spacing system
 */

import { spacing, spacingClasses, getResponsiveSpacing } from '../config/spacing'

/**
 * Convert pixel values to rem units (assuming 16px base font size)
 */
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`
}

/**
 * Convert spacing token to pixel value
 */
export const spacingToPx = (token: keyof typeof spacing): number => {
  return parseInt(spacing[token].replace('px', ''))
}

/**
 * Get Tailwind class for a specific spacing type and size
 */
export const getSpacingClass = (
  type: 'padding' | 'margin' | 'gap' | 'space',
  size: keyof typeof spacingClasses.padding
): string => {
  return spacingClasses[type][size]
}

/**
 * Generate responsive padding classes
 */
export const getResponsivePadding = (
  mobile: keyof typeof spacingClasses.padding,
  tablet?: keyof typeof spacingClasses.padding,
  desktop?: keyof typeof spacingClasses.padding
): string => {
  return getResponsiveSpacing(
    spacingClasses.padding[mobile],
    tablet ? spacingClasses.padding[tablet] : undefined,
    desktop ? spacingClasses.padding[desktop] : undefined
  )
}

/**
 * Generate responsive margin classes
 */
export const getResponsiveMargin = (
  mobile: keyof typeof spacingClasses.margin,
  tablet?: keyof typeof spacingClasses.margin,
  desktop?: keyof typeof spacingClasses.margin
): string => {
  return getResponsiveSpacing(
    spacingClasses.margin[mobile],
    tablet ? spacingClasses.margin[tablet] : undefined,
    desktop ? spacingClasses.margin[desktop] : undefined
  )
}

/**
 * Generate responsive gap classes for grids/flexbox
 */
export const getResponsiveGap = (
  mobile: keyof typeof spacingClasses.gap,
  tablet?: keyof typeof spacingClasses.gap,
  desktop?: keyof typeof spacingClasses.gap
): string => {
  return getResponsiveSpacing(
    spacingClasses.gap[mobile],
    tablet ? spacingClasses.gap[tablet] : undefined,
    desktop ? spacingClasses.gap[desktop] : undefined
  )
}

/**
 * Validate that a spacing value follows the 8px grid
 */
export const isValidGridSpacing = (px: number): boolean => {
  return px % 8 === 0 || px === 4 // Allow 4px for micro spacing
}

/**
 * Round a pixel value to the nearest valid grid spacing
 */
export const roundToGrid = (px: number): number => {
  if (px <= 4) return 4
  return Math.round(px / 8) * 8
}

/**
 * Get the appropriate spacing token for a pixel value
 */
export const getSpacingToken = (px: number): keyof typeof spacing | null => {
  const rounded = roundToGrid(px)
  
  switch (rounded) {
    case 4: return 'micro'
    case 8: return 'small'
    case 16: return 'medium'
    case 24: return 'large'
    case 32: return 'xl'
    case 48: return 'xxl'
    case 80: return 'section'
    default: return null
  }
}

/**
 * Section spacing variants for consistent section padding
 */
export const sectionSpacingVariants = {
  normal: 'py-16 md:py-20',   // 64px mobile, 80px desktop
  large: 'py-20 md:py-24',    // 80px mobile, 96px desktop  
  xlarge: 'py-24 md:py-32'    // 96px mobile, 128px desktop
}

/**
 * Card spacing variants for consistent card layouts
 */
export const cardSpacingVariants = {
  compact: 'p-2',      // 16px padding (2 * 8px)
  normal: 'p-3',       // 24px padding (3 * 8px) (recommended)
  spacious: 'p-4'      // 32px padding (4 * 8px)
}

/**
 * Grid gap variants for consistent grid layouts
 */
export const gridGapVariants = {
  tight: 'gap-2 md:gap-3',     // 16px mobile, 24px desktop (2*8px, 3*8px)
  normal: 'gap-3 md:gap-4',    // 24px mobile, 32px desktop (3*8px, 4*8px) (recommended)
  loose: 'gap-4 md:gap-6'      // 32px mobile, 48px desktop (4*8px, 6*8px)
}