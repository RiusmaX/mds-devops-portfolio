import { render, screen } from '@testing-library/react'
import TechStack from '@/components/TechStack'

describe('TechStack Component', () => {
  it('renders section title', () => {
    render(<TechStack />)
    expect(screen.getByText(/Stack Technique/i)).toBeInTheDocument()
  })

  it('renders technologies', () => {
    render(<TechStack />)
    const techs = ["React / Next.js", "Node.js", "Docker"]
    techs.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})
