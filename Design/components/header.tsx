"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-[10px] tracking-[0.3em] text-white/80 font-sans uppercase">Casa das</span>
          <span className="text-2xl font-serif font-medium tracking-wide text-white">HORTAS</span>
          <span className="text-[10px] tracking-[0.2em] text-white/60 font-sans">EST. 1994</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#quinta" className="text-sm text-white/90 hover:text-white transition-colors font-sans">
            A Quinta
          </Link>
          <Link href="#vinhos" className="text-sm text-white/90 hover:text-white transition-colors font-sans">
            Vinhos
          </Link>
          <Link href="/experiencias" className="text-sm text-white/90 hover:text-white transition-colors font-sans">
            Experiencias
          </Link>
          <Link href="#contactos" className="text-sm text-white/90 hover:text-white transition-colors font-sans">
            Contactos
          </Link>
          <Link
            href="#loja"
            className="px-6 py-3 bg-[#c9a962] text-white text-sm font-sans rounded-full hover:bg-[#b8984f] transition-colors"
          >
            Visitar Loja
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#3d4f3f]/95 backdrop-blur-sm py-6 px-6">
          <div className="flex flex-col gap-4">
            <Link href="#quinta" className="text-white/90 hover:text-white py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
              A Quinta
            </Link>
            <Link href="#vinhos" className="text-white/90 hover:text-white py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
              Vinhos
            </Link>
            <Link href="/experiencias" className="text-white/90 hover:text-white py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
              Experiencias
            </Link>
            <Link href="#contactos" className="text-white/90 hover:text-white py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
              Contactos
            </Link>
            <Link
              href="#loja"
              className="px-6 py-3 bg-[#c9a962] text-white text-sm text-center rounded-full mt-2 font-sans"
              onClick={() => setIsMenuOpen(false)}
            >
              Visitar Loja
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
