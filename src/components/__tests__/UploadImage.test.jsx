import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import UploadImage from '../UploadImage'

describe('UploadImage', () => {
  it('renders upload zone with text', () => {
    render(<UploadImage />)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
  })

  it('renders file input', () => {
    render(<UploadImage />)
    
    const input = document.querySelector('input[type="file"]')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('accept', 'image/*')
  })
})
