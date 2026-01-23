/**
 * Spacing Token System - 8px Grid Based
 * 
 * This file defines the spacing tokens used throughout the portfolio
 * following an 8px grid system (industry standard).
 */

export interface SpacingTokens {
  micro: string;    // 4px - elements very close together
  small: string;    // 8px - related elements
  medium: string;   // 16px - standard separation
  large: string;    // 24px - group separation
  xl: string;       // 32px - card separation
  xxl: string;      // 48px - component separation
  section: string;  // 80px - section separation
}

export const spacing: SpacingTokens = {
  micro: '4px',     // space-0.5
  small: '8px',     // space-1
  medium: '16px',   // space-2
  large: '24px',    // space-3
  xl: '32px',       // space-4
  xxl: '48px',      // space-6
  section: '80px'   // space-10
}

/**
 * Responsive Spacing Configuration
 * Defines how spacing adapts across different viewport sizes
 */
export interface ResponsiveSpacing {
  mobile: SpacingTokens;
  tablet: SpacingTokens;
  desktop: SpacingTokens;
}

export const responsiveSpacing: ResponsiveSpacing = {
  mobile: {
    micro: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',    // Follow 8px grid
    xl: '24px',       // Follow 8px grid (smaller for mobile)
    xxl: '40px',      // Follow 8px grid (5 * 8px)
    section: '64px'   // Follow 8px grid (8 * 8px)
  },
  tablet: {
    micro: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',    // Follow 8px grid
    xl: '32px',       // Follow 8px grid
    xxl: '48px',      // Follow 8px grid
    section: '80px'   // Follow 8px grid
  },
  desktop: {
    micro: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xl: '32px',
    xxl: '48px',
    section: '80px'   // Full section spacing (space-10)
  }
}

/**
 * Component-specific spacing configuration
 * Maps components to their appropriate spacing values
 */
export interface ComponentSpacing {
  hero: {
    padding: string;
    titleMargin: string;
    ctaMargin: string;
  };
  about: {
    sectionPadding: string;
    textSpacing: string;
    buttonMargin: string;
  };
  projects: {
    sectionPadding: string;
    gridGap: string;
    cardPadding: string;
    cardSpacing: string;
  };
  contact: {
    sectionPadding: string;
    formSpacing: string;
  };
}

export const componentSpacing: ComponentSpacing = {
  hero: {
    padding: 'py-16 md:py-20',        // 64px mobile, 80px desktop
    titleMargin: 'mb-4 md:mb-6',      // 16px mobile, 24px desktop
    ctaMargin: 'mb-8 md:mb-12'        // 32px mobile, 48px desktop
  },
  about: {
    sectionPadding: 'py-16 md:py-20', // 64px mobile, 80px desktop
    textSpacing: 'space-y-4',         // 16px vertical spacing
    buttonMargin: 'mt-6'              // 24px top margin
  },
  projects: {
    sectionPadding: 'py-20 md:py-24', // 80px mobile, 96px desktop
    gridGap: 'gap-6 md:gap-8',        // 24px mobile, 32px desktop
    cardPadding: 'p-6',               // 24px internal padding
    cardSpacing: 'space-y-4'          // 16px internal element spacing
  },
  contact: {
    sectionPadding: 'py-16 md:py-20', // 64px mobile, 80px desktop
    formSpacing: 'space-y-6'          // 24px form element spacing
  }
}

/**
 * Tailwind CSS class mappings for the 8px grid system
 */
export const spacingClasses = {
  // Padding classes
  padding: {
    micro: 'p-0.5',    // 4px
    small: 'p-1',      // 8px
    medium: 'p-2',     // 16px
    large: 'p-3',      // 24px
    xl: 'p-4',         // 32px
    xxl: 'p-6',        // 48px
  },
  // Margin classes
  margin: {
    micro: 'm-0.5',    // 4px
    small: 'm-1',      // 8px
    medium: 'm-2',     // 16px
    large: 'm-3',      // 24px
    xl: 'm-4',         // 32px
    xxl: 'm-6',        // 48px
  },
  // Gap classes for grids/flexbox
  gap: {
    micro: 'gap-0.5',  // 4px
    small: 'gap-1',    // 8px
    medium: 'gap-2',   // 16px
    large: 'gap-3',    // 24px
    xl: 'gap-4',       // 32px
    xxl: 'gap-6',      // 48px
  },
  // Space between classes
  space: {
    micro: 'space-y-0.5',  // 4px
    small: 'space-y-1',    // 8px
    medium: 'space-y-2',   // 16px
    large: 'space-y-3',    // 24px
    xl: 'space-y-4',       // 32px
    xxl: 'space-y-6',      // 48px
  }
}

/**
 * Breakpoint utilities for responsive design
 */
export const breakpoints = {
  mobile: '0px',      // < 768px
  tablet: '768px',    // 768px - 1023px  
  desktop: '1024px'   // >= 1024px
}

/**
 * Helper function to get responsive spacing classes
 */
export const getResponsiveSpacing = (
  mobileClass: string,
  tabletClass?: string,
  desktopClass?: string
): string => {
  let classes = mobileClass;
  
  if (tabletClass) {
    classes += ` tablet:${tabletClass}`;
  }
  
  if (desktopClass) {
    classes += ` desktop:${desktopClass}`;
  }
  
  return classes;
}