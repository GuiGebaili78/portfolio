'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    // Link para download do currículo - você pode substituir pelo caminho real do arquivo
    const link = document.createElement('a')
    link.href = '/cv_guilherme_gebaili.pdf'
    link.download = 'Guilherme_Gebaili_CV.pdf'
    link.click()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              Contato
            </button>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={16} />
              Currículo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-secondary-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-secondary-700 hover:text-primary-500 text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-secondary-700 hover:text-primary-500 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-secondary-700 hover:text-primary-500 text-left"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-secondary-700 hover:text-primary-500 text-left"
              >
                Contato
              </button>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors w-fit"
              >
                <Download size={16} />
                Currículo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}




