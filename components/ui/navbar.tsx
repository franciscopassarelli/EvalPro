"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { name: "Características", path: "/caracteristicas" },
    { name: "Precios", path: "/precios" },
    { name: "Acerca de", path: "/acerca-de" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center justify-center gap-2 group" href="/">
          <div className="bg-gradient-to-r from-primary to-purple-600 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            E
          </div>
          <span className="font-bold text-xl relative overflow-hidden group-hover:text-primary transition-colors duration-300">
            EvalPro
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link-animated ${isActive(link.path) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary"
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/register">
            <Button
              size="sm"
              className="rounded-full px-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 hover:shadow-md hover:shadow-primary/20 transform hover:-translate-y-0.5"
            >
              Registrarse
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center overflow-hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
            <Menu className="h-6 w-6" />
          </div>
          <div
            className={`absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          >
            <X className="h-6 w-6" />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-all duration-300 ${
                isActive(link.path) ? "text-primary" : "text-slate-700 hover:text-primary hover:translate-x-1"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 hover:shadow-md hover:shadow-primary/20">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
