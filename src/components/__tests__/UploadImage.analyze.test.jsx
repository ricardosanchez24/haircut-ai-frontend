import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UploadImage from '../UploadImage'
import { selectFile, createFile } from './testHelpers'

describe('UploadImage - AnalyzeButton', () => {
  it('shows AnalyzeButton when valid image is selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    expect(screen.getByRole('button', { name: /analizar/i })).toBeInTheDocument()
  })

  it('hides AnalyzeButton when no image selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    expect(screen.queryByRole('button', { name: /analizar/i })).not.toBeInTheDocument()
  })

  it('hides AnalyzeButton when image is invalid', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.gif', 'image/gif'))
    
    expect(screen.queryByRole('button', { name: /analizar/i })).not.toBeInTheDocument()
  })

  it('calls onAnalyze when AnalyzeButton is clicked', () => {
    const handleAnalyze = vi.fn()
    render(<UploadImage onAnalyze={handleAnalyze} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    const analyzeButton = screen.getByRole('button', { name: /analizar/i })
    fireEvent.click(analyzeButton)
    
    expect(handleAnalyze).toHaveBeenCalledTimes(1)
  })

  it('disables AnalyzeButton while processing', () => {
    const handleAnalyze = vi.fn()
    render(<UploadImage onAnalyze={handleAnalyze} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    const analyzeButton = screen.getByRole('button', { name: /analizar/i })
    fireEvent.click(analyzeButton)
    
    expect(screen.getByRole('button', { name: /analizar/i })).toBeDisabled()
  })
})
