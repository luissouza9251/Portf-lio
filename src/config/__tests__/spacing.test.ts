/**
 * Property-Based Tests for Spacing System
 * Feature: portfolio-spacing-improvements
 * 
 * Tests Properties 1 and 2 from the design document:
 * - Property 1: Section Spacing Consistency
 * - Property 2: Responsive Spacing Adaptation
 */

import { fc } from '@fast-check/jest'
import { 
  spacing, 
  responsiveSpacing, 
  componentSpacing 
} from '../spacing'
import { 
  spacingToPx, 
  isValidGridSpacing, 
  roundToGrid, 
  getSpacingToken,
  getSpacingClass,
  sectionSpacingVariants,
  cardSpacingVariants,
  gridGapVariants
} from '../../utils/spacing'

describe('Spacing System Property-Based Tests', () => {
  
  /**
   * Property 1: Section Spacing Consistency
   * For any rendered section component, the vertical padding should be at least 80px (py-20 equivalent) and consistent across all sections
   * Validates: Requirements 1.1, 1.2
   */
  describe('Property 1: Section Spacing Consistency', () => {
    test('all section spacing variants should have minimum 64px padding', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(sectionSpacingVariants) as Array<keyof typeof sectionSpacingVariants>),
        (variant) => {
          const spacingClass = sectionSpacingVariants[variant]
          
          // Extract mobile padding value (py-16 = 64px, py-20 = 80px, py-24 = 96px)
          const mobileMatch = spacingClass.match(/py-(\d+)/)
          expect(mobileMatch).toBeTruthy()
          
          if (mobileMatch) {
            const mobilePadding = parseInt(mobileMatch[1]) * 8 // Convert to pixels (8px per unit)
            expect(mobilePadding).toBeGreaterThanOrEqual(64) // Minimum 64px on mobile
          }
          
          // Extract desktop padding value (md:py-20 = 80px, md:py-24 = 96px, md:py-32 = 128px)
          const desktopMatch = spacingClass.match(/md:py-(\d+)/)
          expect(desktopMatch).toBeTruthy()
          
          if (desktopMatch) {
            const desktopPadding = parseInt(desktopMatch[1]) * 8 // Convert to pixels
            expect(desktopPadding).toBeGreaterThanOrEqual(80) // Minimum 80px on desktop
          }
          
          return true
        }
      ), { numRuns: 100 })
    })

    test('section spacing should follow 8px grid system', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.values(sectionSpacingVariants)),
        (spacingClass) => {
          // Extract all padding values from the class string
          const paddingMatches = spacingClass.match(/py-(\d+)/g)
          expect(paddingMatches).toBeTruthy()
          
          if (paddingMatches) {
            paddingMatches.forEach(match => {
              const value = parseInt(match.replace('py-', ''))
              const pixelValue = value * 8
              expect(isValidGridSpacing(pixelValue)).toBe(true)
            })
          }
          
          return true
        }
      ), { numRuns: 50 })
    })

    test('all spacing tokens should be consistent with 8px grid', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(spacing) as Array<keyof typeof spacing>),
        (tokenKey) => {
          const tokenValue = spacing[tokenKey]
          const pixelValue = parseInt(tokenValue.replace('px', ''))
          
          // All spacing tokens should follow 8px grid (except micro which is 4px)
          expect(isValidGridSpacing(pixelValue)).toBe(true)
          
          return true
        }
      ), { numRuns: 100 })
    })
  })

  /**
   * Property 2: Responsive Spacing Adaptation  
   * For any viewport size change, all spacing values should adjust proportionally according to the defined responsive breakpoints (mobile/tablet/desktop)
   * Validates: Requirements 1.3, 2.2, 10.1
   */
  describe('Property 2: Responsive Spacing Adaptation', () => {
    test('responsive spacing should maintain proportional relationships', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(responsiveSpacing.mobile) as Array<keyof typeof responsiveSpacing.mobile>),
        (spacingKey) => {
          const mobileValue = parseInt(responsiveSpacing.mobile[spacingKey].replace('px', ''))
          const tabletValue = parseInt(responsiveSpacing.tablet[spacingKey].replace('px', ''))
          const desktopValue = parseInt(responsiveSpacing.desktop[spacingKey].replace('px', ''))
          
          // Mobile should be smallest or equal
          expect(mobileValue).toBeLessThanOrEqual(tabletValue)
          expect(tabletValue).toBeLessThanOrEqual(desktopValue)
          
          // All values should follow 8px grid
          expect(isValidGridSpacing(mobileValue)).toBe(true)
          expect(isValidGridSpacing(tabletValue)).toBe(true)
          expect(isValidGridSpacing(desktopValue)).toBe(true)
          
          return true
        }
      ), { numRuns: 100 })
    })

    test('card spacing variants should maintain internal consistency', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(cardSpacingVariants) as Array<keyof typeof cardSpacingVariants>),
        (variant) => {
          const spacingClass = cardSpacingVariants[variant]
          
          // Extract padding value (p-4 = 16px, p-6 = 24px, p-8 = 32px)
          const paddingMatch = spacingClass.match(/p-(\d+)/)
          expect(paddingMatch).toBeTruthy()
          
          if (paddingMatch) {
            const paddingValue = parseInt(paddingMatch[1]) * 8
            
            // Validate minimum padding requirements
            if (variant === 'compact') {
              expect(paddingValue).toBe(16) // 16px
            } else if (variant === 'normal') {
              expect(paddingValue).toBe(24) // 24px (recommended)
            } else if (variant === 'spacious') {
              expect(paddingValue).toBe(32) // 32px
            }
            
            // All padding should follow 8px grid
            expect(isValidGridSpacing(paddingValue)).toBe(true)
          }
          
          return true
        }
      ), { numRuns: 50 })
    })

    test('grid gap variants should scale appropriately across breakpoints', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(gridGapVariants) as Array<keyof typeof gridGapVariants>),
        (variant) => {
          const gapClass = gridGapVariants[variant]
          
          // Extract mobile and desktop gap values
          const mobileMatch = gapClass.match(/gap-(\d+)/)
          const desktopMatch = gapClass.match(/md:gap-(\d+)/)
          
          expect(mobileMatch).toBeTruthy()
          expect(desktopMatch).toBeTruthy()
          
          if (mobileMatch && desktopMatch) {
            const mobileGap = parseInt(mobileMatch[1]) * 8
            const desktopGap = parseInt(desktopMatch[1]) * 8
            
            // Desktop gap should be equal or larger than mobile
            expect(desktopGap).toBeGreaterThanOrEqual(mobileGap)
            
            // Both should follow 8px grid
            expect(isValidGridSpacing(mobileGap)).toBe(true)
            expect(isValidGridSpacing(desktopGap)).toBe(true)
            
            // Validate specific variant requirements
            if (variant === 'tight') {
              expect(mobileGap).toBe(16) // gap-4 = 16px
              expect(desktopGap).toBe(24) // md:gap-6 = 24px
            } else if (variant === 'normal') {
              expect(mobileGap).toBe(24) // gap-6 = 24px
              expect(desktopGap).toBe(32) // md:gap-8 = 32px
            } else if (variant === 'loose') {
              expect(mobileGap).toBe(32) // gap-8 = 32px
              expect(desktopGap).toBe(48) // md:gap-12 = 48px
            }
          }
          
          return true
        }
      ), { numRuns: 50 })
    })
  })

  /**
   * Additional Property Tests for Utility Functions
   */
  describe('Spacing Utility Function Properties', () => {
    test('roundToGrid should always return valid grid values', () => {
      fc.assert(fc.property(
        fc.integer({ min: 1, max: 200 }),
        (inputPx) => {
          const rounded = roundToGrid(inputPx)
          expect(isValidGridSpacing(rounded)).toBe(true)
          
          // Should be closest valid value
          const diff = Math.abs(rounded - inputPx)
          expect(diff).toBeLessThanOrEqual(4) // Maximum difference should be 4px
          
          return true
        }
      ), { numRuns: 200 })
    })

    test('getSpacingToken should return correct tokens for valid grid values', () => {
      fc.assert(fc.property(
        fc.constantFrom(4, 8, 16, 24, 32, 48, 80),
        (validPx) => {
          const token = getSpacingToken(validPx)
          expect(token).toBeTruthy()
          
          if (token) {
            const tokenPx = spacingToPx(token)
            expect(tokenPx).toBe(validPx)
          }
          
          return true
        }
      ), { numRuns: 50 })
    })

    test('spacingToPx should correctly convert all spacing tokens', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(spacing) as Array<keyof typeof spacing>),
        (token) => {
          const px = spacingToPx(token)
          expect(px).toBeGreaterThan(0)
          expect(isValidGridSpacing(px)).toBe(true)
          
          // Verify specific token values
          const expectedValues: Record<keyof typeof spacing, number> = {
            micro: 4,
            small: 8,
            medium: 16,
            large: 24,
            xl: 32,
            xxl: 48,
            section: 80
          }
          
          expect(px).toBe(expectedValues[token])
          
          return true
        }
      ), { numRuns: 100 })
    })

    test('getSpacingClass should return valid Tailwind classes', () => {
      fc.assert(fc.property(
        fc.constantFrom('padding', 'margin', 'gap', 'space'),
        fc.constantFrom('micro', 'small', 'medium', 'large', 'xl', 'xxl'),
        (type, size) => {
          const className = getSpacingClass(type as any, size as any)
          expect(className).toBeTruthy()
          expect(typeof className).toBe('string')
          
          // Should contain the type prefix
          if (type === 'padding') {
            expect(className).toMatch(/^p-/)
          } else if (type === 'margin') {
            expect(className).toMatch(/^m-/)
          } else if (type === 'gap') {
            expect(className).toMatch(/^gap-/)
          } else if (type === 'space') {
            expect(className).toMatch(/^space-y-/)
          }
          
          return true
        }
      ), { numRuns: 100 })
    })
  })

  /**
   * Component Spacing Configuration Tests
   */
  describe('Component Spacing Configuration Properties', () => {
    test('all component spacing should use valid responsive classes', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(componentSpacing) as Array<keyof typeof componentSpacing>),
        (componentKey) => {
          const component = componentSpacing[componentKey]
          
          Object.values(component).forEach(spacingClass => {
            // Should contain valid Tailwind spacing classes
            expect(typeof spacingClass).toBe('string')
            expect(spacingClass.length).toBeGreaterThan(0)
            
            // If it contains responsive classes, they should be properly formatted
            if (spacingClass.includes('md:')) {
              const parts = spacingClass.split(' ')
              expect(parts.length).toBeGreaterThanOrEqual(2)
            }
          })
          
          return true
        }
      ), { numRuns: 50 })
    })
  })
})