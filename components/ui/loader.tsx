"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)

  // Efecto para la carga inicial
  useEffect(() => {
    // Mostrar el loader solo durante la carga inicial
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 segundos de carga inicial

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary to-purple-600 blur-md opacity-70 animate-pulse"></div>
          <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-md shadow-xl animate-spin-slow">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              E
            </span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
            EvalPro
          </h3>
          <p className="text-sm text-slate-500 mt-2">Cargando...</p>
        </div>
      </div>
    </div>
  )
}
