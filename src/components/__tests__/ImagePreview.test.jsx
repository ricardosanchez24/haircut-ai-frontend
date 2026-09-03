import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ImagePreview from '../ImagePreview'

describe('ImagePreview', () => {
  it('renders image with correct src', () => {
    const preview = 'blob:http://localhost:3000/test-image'
    render(<ImagePreview preview={preview} onClear={() => {}} />)
    
    const img = screen.getByRole('img', { name: /vista previa/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', preview)
  })

  it('renders change image button', () => {
    render(<ImagePreview preview="test.jpg" onClear={() => {}} />)
    
    expect(screen.getByRole('button', { name: /cambiar imagen/i })).toBeInTheDocument()
  })

  it('calls onClear when change button is clicked', () => {
    const handleClear = vi.fn()
    render(<ImagePreview preview="test.jpg" onClear={handleClear} />)
    
    const button = screen.getByRole('button', { name: /cambiar imagen/i })
    fireEvent.click(button)
    
    expect(handleClear).toHaveBeenCalledTimes(1)
  })
})
