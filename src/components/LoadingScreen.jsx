import { useState, useEffect } from 'react'
import { Loader } from 'lucide-react'

const messages = [
  "Analizando tu forma de rostro...",
  "Detectando tipo de cabello...",
  "Buscando los mejores estilos...",
  "Preparando tus recomendaciones..."
]

function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader className="w-12 h-12 animate-spin text-violet-600 mb-4" role="status" />
      <p className="text-gray-600 text-lg">{messages[messageIndex]}</p>
    </div>
  )
}

export default LoadingScreen
