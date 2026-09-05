import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import UploadImage from './components/UploadImage'
import LoadingScreen from './components/LoadingScreen'
import ResultsDisplay from './components/ResultsDisplay'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [appState, setAppState] = useState('upload')
  const [recommendations, setRecommendations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleAnalyze = (file) => {
    setAppState('loading')
    
    // Mock: simular respuesta de API después de 3 segundos
    setTimeout(() => {
      setRecommendations([]) // Usará mock de ResultsDisplay
      setAppState('success')
    }, 3000)
  }

  const handleRetry = () => {
    setAppState('upload')
    setRecommendations([])
    setErrorMessage('')
  }

  // Función de prueba para simular error
  const simulateError = () => {
    setAppState('loading')
    
    setTimeout(() => {
      setErrorMessage('No pudimos analizar tu imagen. Intenta de nuevo.')
      setAppState('error')
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {appState === 'upload' && (
          <div className="w-full max-w-lg mx-auto">
            <UploadImage onAnalyze={handleAnalyze} />
            
            {/* Panel de Pruebas - Para simular errores */}
            <div className="mt-8 p-4 border-2 border-dashed border-yellow-300 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-700 mb-2 font-semibold">Panel de Pruebas</p>
              <button
                onClick={simulateError}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Simular Error de API
              </button>
            </div>
          </div>
        )}
        {appState === 'loading' && (
          <LoadingScreen />
        )}
        {appState === 'success' && (
          <ResultsDisplay 
            recommendations={recommendations}
            onRetry={handleRetry}
          />
        )}
        {appState === 'error' && (
          <ErrorMessage 
            message={errorMessage}
            onRetry={handleRetry}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
