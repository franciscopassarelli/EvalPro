"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Search } from "lucide-react"

export default function EvaluationsPage() {
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
            className="flex h-full items-center border-b-2 border-primary px-4 text-sm font-medium"
            href="/dashboard/evaluations"
          >
            Evaluaciones
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
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
            <h1 className="text-3xl font-bold">Evaluaciones</h1>
            <Link href="/dashboard/evaluations/create">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nueva evaluación
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar evaluaciones..." className="w-full bg-background pl-8" />
            </div>
          </div>
          <Tabs defaultValue="active">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="active">Activas</TabsTrigger>
                <TabsTrigger value="draft">Borradores</TabsTrigger>
                <TabsTrigger value="completed">Completadas</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="active" className="border-none p-0 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación de desempeño - Ventas</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Creada: 12/04/2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Progreso</p>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-1/2 rounded-full bg-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">12/24 completadas</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación de mandos medios - Producción</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Creada: 10/04/2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Progreso</p>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-3/4 rounded-full bg-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">15/20 completadas</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Evaluación de operativos - Logística</CardTitle>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Creada: 08/04/2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Progreso</p>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-1/4 rounded-full bg-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">5/18 completadas</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="draft" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Borradores de evaluaciones</CardTitle>
                  <CardDescription>Evaluaciones que aún no han sido publicadas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">No hay borradores de evaluaciones disponibles.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluaciones completadas</CardTitle>
                  <CardDescription>Evaluaciones que han sido finalizadas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Evaluación anual 2024 - Ventas</CardTitle>
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <CardDescription>Completada: 15/12/2024</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center gap-4">
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Promedio general</p>
                            <p className="text-lg font-bold">8.5/10</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            Ver informe
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
