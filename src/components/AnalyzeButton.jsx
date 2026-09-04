import { Brain } from 'lucide-react'

function AnalyzeButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors cursor-pointer"
    >
      <Brain className="w-5 h-5" />
      Analizar
    </button>
  )
}

export default AnalyzeButton
