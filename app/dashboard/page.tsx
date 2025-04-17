"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, FileText, Plus, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span className="font-bold text-xl">EvalPro</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <Link
            className="flex h-full items-center border-b-2 border-primary px-4 text-sm font-medium"
            href="/"
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

        <Link href="/" className="text-sm font-medium hover:underline">
  <Button variant="outline" size="sm">
  ← Volver al inicio
  </Button>
</Link>

        <div className="ml-auto flex items-center gap-4">
          
          <Button variant="outline" size="sm">
            Mi empresa
          </Button>
        </div>
        
      </header>
      <main className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva evaluación
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Evaluaciones activas</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Evaluaciones completadas</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+15 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Empleados evaluados</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">+8 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Promedio de desempeño</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.8</div>
                <p className="text-xs text-muted-foreground">+0.3 desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="recent">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="recent">Evaluaciones recientes</TabsTrigger>
                <TabsTrigger value="pending">Pendientes</TabsTrigger>
                <TabsTrigger value="completed">Completadas</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="recent" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluaciones recientes</CardTitle>
                  <CardDescription>Lista de las evaluaciones más recientes creadas en su organización.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden">
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-base">Evaluación de desempeño - Ventas</CardTitle>
                          <CardDescription>Creada: 12/04/2025</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">Progreso</p>
                              <div className="h-2 w-full rounded-full bg-gray-100">
                                <div className="h-full w-1/2 rounded-full bg-primary" />
                              </div>
                              <p className="text-xs text-muted-foreground">12/24 completadas</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-base">
                            Evaluación de mandos medios - Producción
                          </CardTitle>
                          <CardDescription>Creada: 10/04/2025</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">Progreso</p>
                              <div className="h-2 w-full rounded-full bg-gray-100">
                                <div className="h-full w-3/4 rounded-full bg-primary" />
                              </div>
                              <p className="text-xs text-muted-foreground">15/20 completadas</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-base">Evaluación de operativos - Logística</CardTitle>
                          <CardDescription>Creada: 08/04/2025</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">Progreso</p>
                              <div className="h-2 w-full rounded-full bg-gray-100">
                                <div className="h-full w-1/4 rounded-full bg-primary" />
                              </div>
                              <p className="text-xs text-muted-foreground">5/18 completadas</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pending" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluaciones pendientes</CardTitle>
                  <CardDescription>Lista de evaluaciones que aún no han sido completadas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seleccione la pestaña "Pendientes" para ver las evaluaciones en progreso.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluaciones completadas</CardTitle>
                  <CardDescription>Lista de evaluaciones que han sido finalizadas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seleccione la pestaña "Completadas" para ver las evaluaciones finalizadas.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
