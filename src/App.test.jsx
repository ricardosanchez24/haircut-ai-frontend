import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders Header', () => {
    render(<App />)
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders Footer', () => {
    render(<App />)
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders UploadImage initially', () => {
    render(<App />)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
  })

  it('shows LoadingScreen when analyzing', () => {
    render(<App />)
    
    const uploadButton = screen.getByRole('button', { name: /selecciona una foto/i })
    const fileInput = document.querySelector('input[type="file"]')
    
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    fireEvent.click(uploadButton)
    
    const analyzeButton = screen.getByRole('button', { name: /analizar/i })
    fireEvent.click(analyzeButton)
    
    expect(screen.getByText(/analizando tu forma de rostro/i)).toBeInTheDocument()
  })

  it('shows ResultsDisplay after success', () => {
    render(<App />)
    
    const fileInput = document.querySelector('input[type="file"]')
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    const analyzeButton = screen.getByRole('button', { name: /analizar/i })
    fireEvent.click(analyzeButton)
    
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    
    expect(screen.getByText(/tus 3 estilos recomendados/i)).toBeInTheDocument()
  })

  it('shows ErrorMessage on error', () => {
    render(<App />)
    
    const simulateErrorButton = screen.getByRole('button', { name: /simular error de api/i })
    fireEvent.click(simulateErrorButton)
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/no pudimos analizar tu imagen/i)).toBeInTheDocument()
  })

  it('returns to upload when retry', () => {
    render(<App />)
    
    const simulateErrorButton = screen.getByRole('button', { name: /simular error de api/i })
    fireEvent.click(simulateErrorButton)
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    const retryButton = screen.getByRole('button', { name: /intentar de nuevo/i })
    fireEvent.click(retryButton)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
  })

  it('shows test panel when in upload state', () => {
    render(<App />)
    
    expect(screen.getByText(/panel de pruebas/i)).toBeInTheDocument()
  })

  it('simulates error when test button clicked', () => {
    render(<App />)
    
    const simulateErrorButton = screen.getByRole('button', { name: /simular error de api/i })
    fireEvent.click(simulateErrorButton)
    
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    
    expect(screen.getByText(/no pudimos analizar tu imagen/i)).toBeInTheDocument()
  })
})
