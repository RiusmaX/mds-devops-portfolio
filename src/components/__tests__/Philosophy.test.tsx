import { render, screen } from '@testing-library/react'
import Philosophy from '@/components/Philosophy'

describe('Philosophy Component', () => {
  it('renders section title', () => {
    render(<Philosophy />)
    expect(screen.getByText(/Philosophie/i)).toBeInTheDocument()
  })

  it('renders principles', () => {
    render(<Philosophy />)
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Architecture SOLID')).toBeInTheDocument()
    expect(screen.getByText('Approche KISS')).toBeInTheDocument()
  })
})
