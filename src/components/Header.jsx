import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300">
          AMADOU MBODJ
        </h1>
        <nav>
          <Button variant="ghost" className="mr-2 hover:text-blue-600 transition-colors duration-300">
            Accueil
          </Button>
          <Button variant="ghost" className="mr-2 hover:text-blue-600 transition-colors duration-300">
            Projets
          </Button>
          <Button variant="ghost" className="hover:text-blue-600 transition-colors duration-300">
            <a href="/CvAmadou.pdf">CV</a>
          </Button>
          <Button variant="outline" className="hover:bg-blue-600 hover:text-white transition-colors duration-300">Contactez moi</Button>
        </nav>
        
      </div>
    </header>
  )
}

export default Header

