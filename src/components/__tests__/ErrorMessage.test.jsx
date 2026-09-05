import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ErrorMessage from '../ErrorMessage'

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(<ErrorMessage message="Error al analizar" onRetry={() => {}} />)
    
    expect(screen.getByText(/error al analizar/i)).toBeInTheDocument()
  })

  it('renders retry button', () => {
    render(<ErrorMessage message="Error" onRetry={() => {}} />)
    
    expect(screen.getByRole('button', { name: /intentar de nuevo/i })).toBeInTheDocument()
  })

  it('calls onRetry when button is clicked', () => {
    const handleRetry = vi.fn()
    render(<ErrorMessage message="Error" onRetry={handleRetry} />)
    
    const button = screen.getByRole('button', { name: /intentar de nuevo/i })
    fireEvent.click(button)
    
    expect(handleRetry).toHaveBeenCalledTimes(1)
  })
})
