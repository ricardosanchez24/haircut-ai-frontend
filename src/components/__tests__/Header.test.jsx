import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

describe('Header', () => {
  it('renders logo text "HaircutAI"', () => {
    render(<Header />)
    
    expect(screen.getByText(/haircutai/i)).toBeInTheDocument()
  })

  it('renders navigation link "Inicio"', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument()
  })

  it('has correct styles', () => {
    render(<Header />)
    
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-gray-900')
    expect(header).toHaveClass('text-white')
  })
})
