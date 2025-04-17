"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Search } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
          <span className="font-bold text-xl">EvalPro</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <Link
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
            href="/dashboard/evaluations"
          >
            Evaluaciones
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-primary px-4 text-sm font-medium"
            href="/dashboard/templates"
          >
            Plantillas
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
            href="/dashboard/reports"
          >
            Informes
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
            href="/dashboard/employees"
          >
            Empleados
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Mi empresa
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Plantillas de evaluación</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva plantilla
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar plantillas..." className="w-full bg-background pl-8" />
            </div>
          </div>
          <Tabs defaultValue="predefined">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="predefined">Predefinidas</TabsTrigger>
                <TabsTrigger value="custom">Personalizadas</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="predefined" className="border-none p-0 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación para mandos medios</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>
                      Plantilla estándar para evaluar el desempeño de gerentes y supervisores.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Categorías:</span> Liderazgo, Comunicación, Gestión de equipos, Toma
                      de decisiones
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Usar plantilla
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación para vendedores</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>
                      Plantilla diseñada para evaluar el rendimiento del personal de ventas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Categorías:</span> Cumplimiento de metas, Atención al cliente,
                      Conocimiento de producto, Cierre de ventas
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Usar plantilla
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación para operativos</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Plantilla para evaluar al personal operativo y de producción.</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Categorías:</span> Productividad, Calidad, Seguridad, Trabajo en
                      equipo
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Usar plantilla
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="border-none p-0 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Mi plantilla personalizada</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Plantilla personalizada creada para su empresa.</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Categorías:</span> Adaptabilidad, Innovación, Competencias técnicas
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    <Button variant="outline" className="flex-1">
                      Editar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Usar
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <h3 className="font-medium">Crear plantilla personalizada</h3>
                    <p className="text-sm text-muted-foreground">
                      Diseñe una plantilla adaptada a las necesidades específicas de su empresa
                    </p>
                    <Button className="mt-2">Crear plantilla</Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
