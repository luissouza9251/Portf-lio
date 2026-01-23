import { render, screen } from '@testing-library/react'
import SectionContainer from '../SectionContainer'

/**
 * Comprehensive unit tests for SectionContainer component
 * 
 * Tests focus on specific examples and edge cases that complement
 * the property-based tests. Validates Requirements 1.1, 1.2, 1.3.
 */
describe('SectionContainer', () => {
  describe('Basic Functionality', () => {
    it('renders children correctly', () => {
      render(
        <SectionContainer>
          <div>Test content</div>
        </SectionContainer>
      )
      
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders as a section element', () => {
      const { container } = render(
        <SectionContainer>
          <div>Test content</div>
        </SectionContainer>
      )
      
      expect(container.firstChild?.nodeName).toBe('SECTION')
    })

    it('renders with no children', () => {
      const { container } = render(<SectionContainer />)
      
      const section = container.firstChild as HTMLElement
      expect(section).toBeInTheDocument()
      expect(section.nodeName).toBe('SECTION')
      expect(section).toHaveClass('py-16', 'md:py-20')
    })
  })

  describe('Spacing Variants - Validates Requirements 1.1, 1.2', () => {
    it('applies default normal spacing (64px mobile, 80px desktop)', () => {
      const { container } = render(
        <SectionContainer>
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-16', 'md:py-20')
      // py-16 = 64px, md:py-20 = 80px (meets minimum 80px requirement on desktop)
    })

    it('applies large spacing variant (80px mobile, 96px desktop)', () => {
      const { container } = render(
        <SectionContainer spacing="large">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-20', 'md:py-24')
      // py-20 = 80px, md:py-24 = 96px
    })

    it('applies xlarge spacing variant (96px mobile, 128px desktop)', () => {
      const { container } = render(
        <SectionContainer spacing="xlarge">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-24', 'md:py-32')
      // py-24 = 96px, md:py-32 = 128px
    })

    it('maintains consistent spacing classes across re-renders', () => {
      const { container, rerender } = render(
        <SectionContainer spacing="normal">
          <div>Content</div>
        </SectionContainer>
      )
      
      let section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-16', 'md:py-20')
      
      rerender(
        <SectionContainer spacing="normal">
          <div>Updated content</div>
        </SectionContainer>
      )
      
      section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-16', 'md:py-20')
    })
  })

  describe('Responsive Behavior - Validates Requirements 1.3, 10.1', () => {
    it('applies mobile-first responsive classes correctly', () => {
      const { container } = render(
        <SectionContainer spacing="normal">
          <div>Responsive content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      // Should have base mobile class and responsive desktop class
      expect(section).toHaveClass('py-16') // Mobile base
      expect(section).toHaveClass('md:py-20') // Desktop responsive
    })

    it('ensures all spacing variants follow responsive pattern', () => {
      const variants = [
        { spacing: 'normal' as const, mobile: 'py-16', desktop: 'md:py-20' },
        { spacing: 'large' as const, mobile: 'py-20', desktop: 'md:py-24' },
        { spacing: 'xlarge' as const, mobile: 'py-24', desktop: 'md:py-32' }
      ]

      variants.forEach(({ spacing, mobile, desktop }) => {
        const { container } = render(
          <SectionContainer spacing={spacing}>
            <div>Content for {spacing}</div>
          </SectionContainer>
        )
        
        const section = container.firstChild as HTMLElement
        expect(section).toHaveClass(mobile, desktop)
      })
    })

    it('maintains proportional spacing increase across breakpoints', () => {
      // Normal: 64px -> 80px (25% increase)
      // Large: 80px -> 96px (20% increase)  
      // XLarge: 96px -> 128px (33% increase)
      
      const { container: normalContainer } = render(
        <SectionContainer spacing="normal"><div>Normal</div></SectionContainer>
      )
      const { container: largeContainer } = render(
        <SectionContainer spacing="large"><div>Large</div></SectionContainer>
      )
      const { container: xlargeContainer } = render(
        <SectionContainer spacing="xlarge"><div>XLarge</div></SectionContainer>
      )
      
      const normalSection = normalContainer.firstChild as HTMLElement
      const largeSection = largeContainer.firstChild as HTMLElement
      const xlargeSection = xlargeContainer.firstChild as HTMLElement
      
      // Verify progressive spacing increase
      expect(normalSection).toHaveClass('py-16', 'md:py-20')
      expect(largeSection).toHaveClass('py-20', 'md:py-24')
      expect(xlargeSection).toHaveClass('py-24', 'md:py-32')
    })
  })

  describe('ClassName Combination', () => {
    it('combines custom className with spacing classes', () => {
      const { container } = render(
        <SectionContainer className="custom-class bg-gray-900" spacing="large">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-20', 'md:py-24', 'custom-class', 'bg-gray-900')
    })

    it('handles empty className gracefully', () => {
      const { container } = render(
        <SectionContainer className="" spacing="normal">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-16', 'md:py-20')
      expect(section.className).toBe('py-16 md:py-20')
    })

    it('handles undefined className gracefully', () => {
      const { container } = render(
        <SectionContainer className={undefined} spacing="large">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass('py-20', 'md:py-24')
    })

    it('trims whitespace from combined classes', () => {
      const { container } = render(
        <SectionContainer className="  extra-spaces  " spacing="normal">
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section.className).not.toMatch(/^\s|\s$/) // No leading/trailing spaces
      expect(section).toHaveClass('py-16', 'md:py-20', 'extra-spaces')
    })

    it('handles multiple custom classes correctly', () => {
      const { container } = render(
        <SectionContainer className="bg-gray-900 border-t border-gray-800 relative" spacing="xlarge">
          <div>Complex styling</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section).toHaveClass(
        'py-24', 'md:py-32', // Spacing classes
        'bg-gray-900', 'border-t', 'border-gray-800', 'relative' // Custom classes
      )
    })
  })

  describe('Edge Cases and Error Handling', () => {
    it('handles invalid spacing variant gracefully', () => {
      // TypeScript would prevent this, but testing runtime behavior
      const { container } = render(
        <SectionContainer spacing={'invalid' as any}>
          <div>Test content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      // Should fall back to default behavior or handle gracefully
      expect(section).toBeInTheDocument()
    })

    it('renders with complex nested children', () => {
      render(
        <SectionContainer spacing="large">
          <div>
            <header>
              <h1>Title</h1>
              <nav>
                <ul>
                  <li><a href="#test">Link</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <p>Content paragraph</p>
            </main>
          </div>
        </SectionContainer>
      )
      
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Link')).toBeInTheDocument()
      expect(screen.getByText('Content paragraph')).toBeInTheDocument()
    })

    it('maintains accessibility with proper semantic structure', () => {
      const { container } = render(
        <SectionContainer>
          <h2>Section Title</h2>
          <p>Section content</p>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      expect(section.tagName).toBe('SECTION')
      expect(section).toContainElement(screen.getByRole('heading', { level: 2 }))
    })
  })

  describe('Requirements Validation', () => {
    it('validates Requirement 1.1: minimum 80px padding on desktop', () => {
      const variants = ['normal', 'large', 'xlarge'] as const
      
      variants.forEach(spacing => {
        const { container } = render(
          <SectionContainer spacing={spacing}>
            <div>Content</div>
          </SectionContainer>
        )
        
        const section = container.firstChild as HTMLElement
        const classes = section.className
        
        // All variants should have desktop classes that provide at least 80px
        // md:py-20 = 80px, md:py-24 = 96px, md:py-32 = 128px
        expect(classes).toMatch(/md:py-(20|24|32)/)
      })
    })

    it('validates Requirement 1.2: consistent spacing between sections', () => {
      // Test that multiple sections maintain consistent spacing
      const { container } = render(
        <div>
          <SectionContainer spacing="normal">
            <div>Section 1</div>
          </SectionContainer>
          <SectionContainer spacing="normal">
            <div>Section 2</div>
          </SectionContainer>
          <SectionContainer spacing="normal">
            <div>Section 3</div>
          </SectionContainer>
        </div>
      )
      
      const sections = container.querySelectorAll('section')
      expect(sections).toHaveLength(3)
      
      // All sections should have identical spacing classes
      sections.forEach(section => {
        expect(section).toHaveClass('py-16', 'md:py-20')
      })
    })

    it('validates Requirement 1.3: proportional mobile spacing adjustment', () => {
      const { container } = render(
        <SectionContainer spacing="normal">
          <div>Mobile content</div>
        </SectionContainer>
      )
      
      const section = container.firstChild as HTMLElement
      
      // Mobile should have proportionally smaller spacing (64px vs 80px desktop)
      expect(section).toHaveClass('py-16') // 64px mobile
      expect(section).toHaveClass('md:py-20') // 80px desktop
      
      // Ratio: 64/80 = 0.8 (20% reduction for mobile)
    })
  })
})