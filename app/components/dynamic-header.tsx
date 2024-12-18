'use client'

import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function DynamicHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    let timeoutId: NodeJS.Timeout

    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', throttledHandleScroll)
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [lastScrollY])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">ZRGaming</div>
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" onClick={(e) => scrollToSection(e, 'home')} className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#products" onClick={(e) => scrollToSection(e, 'products')} className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/#location" onClick={(e) => scrollToSection(e, 'location')} className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Ubicación
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
            <div className="flex space-x-4">
              <button
                onClick={() => alert('Estamos trabajando en nuestra página de Facebook. ¡Pronto estará disponible!')}
                className="text-[#1877F2] hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </button>
              <a href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#E4405F] hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-300" size={24} />
              </a>
              <a href="https://wa.me/541150398570" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-[#25D366] hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300" size={24} />
              </a>
            </div>
          </div>
          <button className="md:hidden text-blue-600 dark:text-blue-400" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 transition-all duration-300 ease-in-out">
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" onClick={(e) => scrollToSection(e, 'home')} className="block py-2 text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#products" onClick={(e) => scrollToSection(e, 'products')} className="block py-2 text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/#location" onClick={(e) => scrollToSection(e, 'location')} className="block py-2 text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Ubicación
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col space-y-4 mt-4">
              <ThemeToggle />
              <div className="flex space-x-4">
                <button
                  onClick={() => alert('Estamos trabajando en nuestra página de Facebook. ¡Pronto estará disponible!')}
                  className="text-[#1877F2] hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </button>
                <a href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#E4405F] hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-300" size={24} />
                </a>
                <a href="https://wa.me/541150398570" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-[#25D366] hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300" size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

