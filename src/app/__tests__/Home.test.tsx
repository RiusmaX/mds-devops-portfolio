import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock des composants enfants pour isoler le test de la page
// Cela évite de rendre toute l'arborescence et de gérer les dépendances complexes des enfants
jest.mock('@/components/Hero', () => () => <div data-testid="hero-section">Hero Section</div>)
jest.mock('@/components/TechStack', () => () => <div data-testid="tech-stack-section">TechStack Section</div>)
jest.mock('@/components/Philosophy', () => () => <div data-testid="philosophy-section">Philosophy Section</div>)
jest.mock('@/components/Services', () => () => <div data-testid="services-section">Services Section</div>)
jest.mock('@/components/Contact', () => () => <div data-testid="contact-section">Contact Section</div>)

describe('Homepage', () => {
  it('renders all main sections', () => {
    render(<Home />)
 
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument()
    expect(screen.getByTestId('philosophy-section')).toBeInTheDocument()
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    expect(screen.getByText(/Conçu & Développé par Marius/i)).toBeInTheDocument()
  })
})
