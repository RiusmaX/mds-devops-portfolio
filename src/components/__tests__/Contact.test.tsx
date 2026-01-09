import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact Component', () => {
  it('renders title and button', () => {
    render(<Contact />)
    
    expect(screen.getByText('Me Contacter')).toBeInTheDocument()
    expect(screen.getByText('04. Et maintenant ?')).toBeInTheDocument()
    
    // Check for "Dire Bonjour" link
    const link = screen.getByRole('link', { name: /Dire Bonjour/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'mailto:marius@example.com')
  })
})
