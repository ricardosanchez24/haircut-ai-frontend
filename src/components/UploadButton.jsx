import { Upload } from 'lucide-react'

function UploadButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
    >
      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" /> // para que?
      <p className="text-gray-600">Selecciona una foto de tu rostro</p>
    </button>
  )
}

export default UploadButton
