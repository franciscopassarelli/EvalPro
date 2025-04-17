"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Home, LogOut, Menu, Settings, User, Users, X } from "lucide-react"
import { useState } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Evaluaciones", path: "/dashboard/evaluations", icon: FileText },
    { name: "Plantillas", path: "/dashboard/templates", icon: FileText },
    { name: "Informes", path: "/dashboard/reports", icon: BarChart3 },
    { name: "Empleados", path: "/dashboard/employees", icon: Users },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="p-6 border-b border-slate-700">
          <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
            <div className="bg-white w-8 h-8 rounded-md flex items-center justify-center text-primary font-bold">E</div>
            <span className="font-bold text-xl">EvalPro</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(link.path) ? "bg-primary text-white" : "text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
            <Settings className="h-5 w-5" />
            Configuración
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar for mobile */}
        <header className="md:hidden sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
            <div className="bg-gradient-to-r from-primary to-purple-600 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="font-bold text-xl">EvalPro</span>
          </Link>
          <div className="ml-auto">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Mobile sidebar */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50">
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
              <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
                  <div className="bg-white w-8 h-8 rounded-md flex items-center justify-center text-primary font-bold">
                    E
                  </div>
                  <span className="font-bold text-xl">EvalPro</span>
                </Link>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive(link.path) ? "bg-primary text-white" : "text-gray-300 hover:bg-slate-700"
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          {link.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="p-4 border-t border-slate-700">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
                  <Settings className="h-5 w-5" />
                  Configuración
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
                  <LogOut className="h-5 w-5" />
                  Cerrar sesión
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
