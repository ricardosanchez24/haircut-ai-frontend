import { useState, useRef } from 'react'
import UploadButton from './UploadButton'
import ImagePreview from './ImagePreview'
import AnalyzeButton from './AnalyzeButton'
import { validateFile } from '../utils/validateFile'

function UploadImage({ onAnalyze }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      const validation = validateFile(selectedFile)
      
      if (!validation.valid) {
        setError(validation.error)
        setIsValid(false)
        return
      }

      if (preview) {
        URL.revokeObjectURL(preview)
      }
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
      setError('')
      setIsValid(true)
    }
  }

  const openFilePicker = () => {
    fileInputRef.current.click()
  }

  const handleClear = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setFile(null)
    setPreview(null)
    setError('')
    setIsValid(false)
    setIsLoading(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleAnalyze = () => {
    setIsLoading(true)
    onAnalyze(file)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {preview ? (
        <ImagePreview preview={preview} onClear={handleClear} />
      ) : (
        <UploadButton onClick={openFilePicker} />
      )}

      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}

      {preview && isValid && (
        <div className="mt-4">
          <AnalyzeButton 
            onClick={handleAnalyze} 
            disabled={isLoading} 
          />
        </div>
      )}
    </div>
  )
}

export default UploadImage
