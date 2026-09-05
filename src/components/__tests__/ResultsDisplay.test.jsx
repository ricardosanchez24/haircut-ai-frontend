import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ResultsDisplay from '../ResultsDisplay'

const mockRecommendations = [
  {
    name: "Fade Degradado con Textura",
    icon: "✨",
    description: "Este corte te queda bien porque tu forma de rostro ovalada se balancea con el degradado lateral.",
    howToAsk: "Pídele un fade bajo o medio con transición suave."
  },
  {
    name: "Texturizado con Tijera",
    icon: "✂️",
    description: "Por tu tipo de cabello ligeramente ondulado, este corte aprovecha la textura natural.",
    howToAsk: "Pide un corte con tijera de 5-6cm en la parte superior."
  },
  {
    name: "Clásico con Flequillo",
    icon: "💇",
    description: "Tu densidad de cabello es perfecta para este estilo atemporal.",
    howToAsk: "Pide un corte clásico con flequillo lateral."
  }
]

describe('ResultsDisplay', () => {
  it('renders 3 recommendation cards', () => {
    render(<ResultsDisplay recommendations={mockRecommendations} onRetry={() => {}} />)
    
    const cards = screen.getAllByText(/cómo pedirlo al barbero/i)
    expect(cards).toHaveLength(3)
  })

  it('renders recommendation names', () => {
    render(<ResultsDisplay recommendations={mockRecommendations} onRetry={() => {}} />)
    
    expect(screen.getByRole('heading', { name: /fade degradado con textura/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /texturizado con tijera/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /clásico con flequillo/i })).toBeInTheDocument()
  })

  it('renders how to ask section', () => {
    render(<ResultsDisplay recommendations={mockRecommendations} onRetry={() => {}} />)
    
    expect(screen.getByText(/pídele un fade bajo o medio/i)).toBeInTheDocument()
  })

  it('calls onRetry when button is clicked', () => {
    const handleRetry = vi.fn()
    render(<ResultsDisplay recommendations={mockRecommendations} onRetry={handleRetry} />)
    
    const button = screen.getByRole('button', { name: /intentar con otra foto/i })
    fireEvent.click(button)
    
    expect(handleRetry).toHaveBeenCalledTimes(1)
  })
})
