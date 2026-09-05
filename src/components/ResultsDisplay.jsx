const mockRecommendations = [
  {
    name: "Fade Degradado con Textura",
    icon: "✨",
    description: "Este corte te queda bien porque tu forma de rostro ovalada se balancea con el degradado lateral. La textura en la parte superior agrega volumen y movimiento.",
    howToAsk: "Pídele un fade bajo o medio con transición suave. En la parte superior, pide textura con tijera de 3-4cm. Lleva una referencia foto."
  },
  {
    name: "Texturizado con Tijera",
    icon: "✂️",
    description: "Por tu tipo de cabello ligeramente ondulado, este corte aprovecha la textura natural. El largo medio permite diferentes estilos.",
    howToAsk: "Pide un corte con tijera de 5-6cm en la parte superior. Pide que mantenga la textura natural. Puedes usar cera para estilizar."
  },
  {
    name: "Clásico con Flequillo",
    icon: "💇",
    description: "Tu densidad de cabello es perfecta para este estilo atemporal. El flequillo enmarca tu rostro y resalta tus facciones.",
    howToAsk: "Pide un corte clásico con flequillo lateral. Largo de 4-5cm arriba, gradual hacia los lados. Pide que deje el flequillo para peinar hacia un lado."
  }
]

function ResultsDisplay({ recommendations = mockRecommendations, onRetry }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Tus 3 estilos recomendados
      </h2>
      
      <div className="space-y-4">
        {recommendations.map((corte, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{corte.icon}</span>
              <h3 className="font-bold text-lg">{corte.name}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{corte.description}</p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-sm mb-1">Cómo pedirlo al barbero:</p>
              <p className="text-gray-700 text-sm">{corte.howToAsk}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button
          onClick={onRetry}
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
        >
          Intentar con otra foto
        </button>
      </div>
    </div>
  )
}

export default ResultsDisplay
