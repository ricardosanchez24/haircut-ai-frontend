import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import UploadImage from '../UploadImage'
import { selectFile, createFile } from './testHelpers'

describe('UploadImage - Validación', () => {
  it('shows error when file format is invalid', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.gif', 'image/gif'))
    
    expect(screen.getByText(/formato no válido/i)).toBeInTheDocument()
  })

  it('shows error when file size exceeds 10MB', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    const largeFile = createFile('large.jpg', 'image/jpeg', 10 * 1024 * 1024 + 1)
    selectFile(fileInput, largeFile)
    
    expect(screen.getByText(/la imagen supera los 10mb/i)).toBeInTheDocument()
  })

  it('does not show preview when file is invalid', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.gif', 'image/gif'))
    
    expect(screen.queryByRole('img', { name: /vista previa/i })).not.toBeInTheDocument()
  })

  it('shows upload button when file is invalid', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.gif', 'image/gif'))
    
    expect(screen.getByRole('button', { name: /selecciona una foto/i })).toBeInTheDocument()
  })

  it('clears error when selecting new valid file', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.gif', 'image/gif'))
    expect(screen.getByText(/formato no válido/i)).toBeInTheDocument()
    
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    expect(screen.queryByText(/formato no válido/i)).not.toBeInTheDocument()
  })
})
