import { Scissors } from 'lucide-react'

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="w-6 h-6" />
          <span className="font-bold text-xl">HaircutAI</span>
        </div>
        <nav>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Inicio
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
