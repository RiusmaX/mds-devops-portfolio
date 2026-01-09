import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the name correctly', () => {
    render(<Hero />)
    
    // Vérifie que le nom est présent
    expect(screen.getByText('Marius Sergent.')).toBeInTheDocument()
  })

  it('renders the main role/title', () => {
    render(<Hero />)
    
    // Utilisation d'une regex pour être moins strict sur la casse ou les espaces
    expect(screen.getByRole('heading', { name: /architectures web/i })).toBeInTheDocument()
  })

  it('contains a link to the contact section', () => {
    render(<Hero />)
    
    const link = screen.getByRole('link', { name: /Démarrer un projet/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })
})
