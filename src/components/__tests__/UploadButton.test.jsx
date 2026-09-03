import { render, screen, fireEvent } from '@testing-library/react' // para que fireEvent?
import { describe, it, expect, vi } from 'vitest'
import UploadButton from '../UploadButton'

describe('UploadButton', () => {
  it('renders with upload icon and text', () => {
    render(<UploadButton onClick={() => {}} />)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn() // que hace este metodo?
    render(<UploadButton onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button) // simula un click?
    
    expect(handleClick).toHaveBeenCalledTimes(1) // que hace esta linea??
  })

  it('has correct styles', () => {
    render(<UploadButton onClick={() => {}} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-dashed')
    expect(button).toHaveClass('cursor-pointer')
  })
})
