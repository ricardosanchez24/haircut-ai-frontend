import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UploadImage from '../UploadImage'

describe('UploadImage', () => {
  it('renders upload zone with text', () => {
    render(<UploadImage />)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
  })

  it('renders hidden file input', () => {
    render(<UploadImage />)
    
    const input = document.querySelector('input[type="file"]')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('accept', 'image/*')
    expect(input).toHaveClass('hidden')
  })

  it('shows upload button when no image selected', () => {
    render(<UploadImage />)
    
    expect(screen.getByRole('button', { name: /selecciona una foto/i })).toBeInTheDocument()
  })

  it('opens file dialog when upload button is clicked', () => {
    render(<UploadImage />)
    
    const uploadButton = screen.getByRole('button', { name: /selecciona una foto/i })
    const fileInput = document.querySelector('input[type="file"]')
    
    const clickSpy = vi.spyOn(fileInput, 'click')
    fireEvent.click(uploadButton)
    
    expect(clickSpy).toHaveBeenCalled()
  })
})
