"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para iniciar sesión
    console.log("Datos de inicio de sesión:", formData)
    // Redireccionar al dashboard después del inicio de sesión exitoso
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 hero-pattern">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
          <Card className="w-full max-w-md border-transparent shadow-xl">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-primary to-purple-600 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
              </div>
              <CardTitle className="text-2xl text-center font-bold">Iniciar sesión</CardTitle>
              <CardDescription className="text-center">Acceda a su cuenta de EvalPro</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@empresa.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      ¿Olvidó su contraseña?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 rounded-full"
                >
                  Iniciar sesión
                </Button>
                <div className="text-center text-sm">
                  ¿No tiene una cuenta?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    Registrarse
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
