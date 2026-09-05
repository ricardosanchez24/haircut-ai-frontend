import { AlertCircle } from 'lucide-react'

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <p className="text-gray-600 text-lg mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}

export default ErrorMessage
