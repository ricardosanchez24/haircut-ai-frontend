import { describe, it, expect } from 'vitest'
import { validateFile } from '../validateFile'

describe('validateFile', () => {
  it('returns valid for JPG file', () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    const result = validateFile(file)
    
    expect(result.valid).toBe(true)
    expect(result.error).toBe('')
  })

  it('returns valid for JPEG file', () => {
    const file = new File(['test'], 'test.jpeg', { type: 'image/jpeg' })
    const result = validateFile(file)
    
    expect(result.valid).toBe(true)
    expect(result.error).toBe('')
  })

  it('returns valid for PNG file', () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' })
    const result = validateFile(file)
    
    expect(result.valid).toBe(true)
    expect(result.error).toBe('')
  })

  it('returns error for GIF file', () => {
    const file = new File(['test'], 'test.gif', { type: 'image/gif' })
    const result = validateFile(file)
    
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Formato no válido. Usa JPG o PNG')
  })

  it('returns error for PDF file', () => {
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' })
    const result = validateFile(file)
    
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Formato no válido. Usa JPG o PNG')
  })

  it('returns error for file larger than 10MB', () => {
    const largeFile = new File(['x'.repeat(10 * 1024 * 1024 + 1)], 'large.jpg', { type: 'image/jpeg' })
    const result = validateFile(largeFile)
    
    expect(result.valid).toBe(false)
    expect(result.error).toBe('La imagen supera los 10MB')
  })

  it('returns valid for file smaller than 10MB', () => {
    const smallFile = new File(['x'.repeat(4 * 1024 * 1024)], 'small.jpg', { type: 'image/jpeg' })
    const result = validateFile(smallFile)
    
    expect(result.valid).toBe(true)
    expect(result.error).toBe('')
  })
})
