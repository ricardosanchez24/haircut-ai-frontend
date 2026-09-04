import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import AnalyzeButton from '../AnalyzeButton'

describe('AnalyzeButton', () => {
  it('renders with text "Analizar" and Brain icon', () => {
    render(<AnalyzeButton onClick={() => {}} disabled={false} />)
    
    expect(screen.getByText(/analizar/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<AnalyzeButton onClick={handleClick} disabled={false} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<AnalyzeButton onClick={() => {}} disabled={true} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('is not disabled when disabled prop is false', () => {
    render(<AnalyzeButton onClick={() => {}} disabled={false} />)
    
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  it('has violet styles when enabled', () => {
    render(<AnalyzeButton onClick={() => {}} disabled={false} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-violet-600')
    expect(button).toHaveClass('hover:bg-violet-700')
  })

  it('has gray styles when disabled', () => {
    render(<AnalyzeButton onClick={() => {}} disabled={true} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('disabled:bg-gray-300')
    expect(button).toHaveClass('disabled:cursor-not-allowed')
  })
})
