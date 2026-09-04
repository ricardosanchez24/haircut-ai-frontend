import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UploadImage from '../UploadImage'
import { selectFile, createFile } from './testHelpers'

describe('UploadImage', () => {
  it('renders upload zone with text', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    expect(screen.getByText(/selecciona una foto/i)).toBeInTheDocument()
  })

  it('renders hidden file input', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const input = document.querySelector('input[type="file"]')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('accept', 'image/*')
    expect(input).toHaveClass('hidden')
  })

  it('shows upload button when no image selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    expect(screen.getByRole('button', { name: /selecciona una foto/i })).toBeInTheDocument()
  })

  it('opens file dialog when upload button is clicked', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const uploadButton = screen.getByRole('button', { name: /selecciona una foto/i })
    const fileInput = document.querySelector('input[type="file"]')
    
    const clickSpy = vi.spyOn(fileInput, 'click')
    fireEvent.click(uploadButton)
    
    expect(clickSpy).toHaveBeenCalled()
  })

  it('shows image preview when file is selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    expect(screen.getByRole('img', { name: /vista previa/i })).toBeInTheDocument()
  })

  it('hides upload button when image is selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    expect(screen.queryByRole('button', { name: /selecciona una foto/i })).not.toBeInTheDocument()
  })

  it('shows change image button when image is selected', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    expect(screen.getByRole('button', { name: /cambiar imagen/i })).toBeInTheDocument()
  })

  it('clears preview when change image is clicked', () => {
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    const changeButton = screen.getByRole('button', { name: /cambiar imagen/i })
    fireEvent.click(changeButton)
    
    expect(screen.getByRole('button', { name: /selecciona una foto/i })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /vista previa/i })).not.toBeInTheDocument()
  })

  it('revokes object URL when clearing preview', () => {
    const revokeSpy = vi.spyOn(URL, 'revokeObjectURL')
    render(<UploadImage onAnalyze={() => {}} />)
    
    const fileInput = document.querySelector('input[type="file"]')
    selectFile(fileInput, createFile('test.jpg', 'image/jpeg'))
    
    const changeButton = screen.getByRole('button', { name: /cambiar imagen/i })
    fireEvent.click(changeButton)
    
    expect(revokeSpy).toHaveBeenCalledTimes(1)
    revokeSpy.mockRestore()
  })
})
