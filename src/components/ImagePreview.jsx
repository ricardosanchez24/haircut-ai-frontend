function ImagePreview({ preview, onClear }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <img 
        src={preview} 
        alt="Vista previa" 
        className="w-full rounded-lg"
      />
      <button
        type="button"
        onClick={onClear}
        className="mt-2 text-sm text-gray-500 hover:text-gray-700"
      >
        Cambiar imagen
      </button>
    </div>
  )
}

export default ImagePreview
