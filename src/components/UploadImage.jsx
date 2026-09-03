import { useState, useRef } from 'react'
import UploadButton from './UploadButton'

function UploadImage() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
      setError('')
      setIsValid(true)
    }
  }

  const openFilePicker = () => {
    fileInputRef.current.click()
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
      
      <UploadButton onClick={openFilePicker} />

      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  )
}

export default UploadImage
