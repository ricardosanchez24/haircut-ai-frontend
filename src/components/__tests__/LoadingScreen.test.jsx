import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import LoadingScreen from '../LoadingScreen'

describe('LoadingScreen', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders initial message', () => {
    render(<LoadingScreen />)
    
    expect(screen.getByText(/analizando tu forma de rostro/i)).toBeInTheDocument()
  })

  it('renders spinner', () => {
    render(<LoadingScreen />)
    
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
  })

  it('rotates messages every 2 seconds', () => {
    render(<LoadingScreen />)
    
    expect(screen.getByText(/analizando tu forma de rostro/i)).toBeInTheDocument()
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/detectando tipo de cabello/i)).toBeInTheDocument()
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/buscando los mejores estilos/i)).toBeInTheDocument()
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/preparando tus recomendaciones/i)).toBeInTheDocument()
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/analizando tu forma de rostro/i)).toBeInTheDocument()
  })
})
