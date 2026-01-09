import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services Component', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText(/Services/i)).toBeInTheDocument()
  })

  it('renders service items', () => {
    render(<Services />)
    expect(screen.getByText("Développement d'Applications Complexes")).toBeInTheDocument()
    expect(screen.getByText("Audit & Refactoring")).toBeInTheDocument()
    expect(screen.getByText("Architecture Technique")).toBeInTheDocument()
  })
})
