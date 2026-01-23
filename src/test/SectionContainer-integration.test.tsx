import { render, screen } from '@testing-library/react'
import { SectionContainer } from '../components'

describe('SectionContainer Integration', () => {
  it('can be imported and used from components index', () => {
    render(
      <SectionContainer spacing="large" className="bg-gray-900">
        <div>
          <h2>Test Section</h2>
          <p>This is a test section with large spacing</p>
        </div>
      </SectionContainer>
    )
    
    expect(screen.getByText('Test Section')).toBeInTheDocument()
    expect(screen.getByText('This is a test section with large spacing')).toBeInTheDocument()
  })

  it('applies correct spacing classes for requirements validation', () => {
    const { container } = render(
      <SectionContainer spacing="normal">
        <div>Normal spacing section</div>
      </SectionContainer>
    )
    
    const section = container.firstChild as HTMLElement
    
    // Validates Requirements 1.1, 1.2: Section should have at least 80px padding (py-20 = 80px)
    // py-16 = 64px on mobile, md:py-20 = 80px on desktop
    expect(section).toHaveClass('py-16', 'md:py-20')
  })

  it('provides consistent spacing across different variants', () => {
    const { rerender, container } = render(
      <SectionContainer spacing="normal">
        <div>Content</div>
      </SectionContainer>
    )
    
    let section = container.firstChild as HTMLElement
    expect(section).toHaveClass('py-16', 'md:py-20')
    
    rerender(
      <SectionContainer spacing="large">
        <div>Content</div>
      </SectionContainer>
    )
    
    section = container.firstChild as HTMLElement
    expect(section).toHaveClass('py-20', 'md:py-24')
    
    rerender(
      <SectionContainer spacing="xlarge">
        <div>Content</div>
      </SectionContainer>
    )
    
    section = container.firstChild as HTMLElement
    expect(section).toHaveClass('py-24', 'md:py-32')
  })
})