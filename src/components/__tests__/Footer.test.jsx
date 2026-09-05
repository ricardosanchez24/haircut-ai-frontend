import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />)
    
    expect(screen.getByText(/© 2026/i)).toBeInTheDocument()
  })

  it('renders project name', () => {
    render(<Footer />)
    
    expect(screen.getByText(/haircutai/i)).toBeInTheDocument()
  })

  it('has correct styles', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-gray-900')
    expect(footer).toHaveClass('text-white')
  })
})
