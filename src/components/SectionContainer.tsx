import React from 'react'
import { SectionSpacingVariant } from '../types/spacing'

/**
 * SectionContainer Component
 * 
 * Provides consistent spacing for major sections of the portfolio.
 * Implements the 8px grid spacing system with responsive variants.
 */

export interface SectionProps {
  children: React.ReactNode
  className?: string
  spacing?: SectionSpacingVariant
}

/**
 * Mapping of spacing variants to Tailwind classes
 * Following the 8px grid system defined in the design document
 */
const spacingMap: Record<SectionSpacingVariant, string> = {
  normal: 'py-16 md:py-20',   // 64px mobile, 80px desktop
  large: 'py-20 md:py-24',    // 80px mobile, 96px desktop  
  xlarge: 'py-24 md:py-32'    // 96px mobile, 128px desktop
}

const SectionContainer: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  spacing = 'normal' 
}) => {
  // Get the appropriate spacing classes for the variant
  const spacingClasses = spacingMap[spacing]
  
  // Combine spacing classes with any additional className
  const combinedClasses = `${spacingClasses} ${className}`.trim()
  
  return (
    <section className={combinedClasses}>
      {children}
    </section>
  )
}

export default SectionContainer