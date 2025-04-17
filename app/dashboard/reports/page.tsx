"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BarChart3, Download, LineChart } from "lucide-react"

export default function ReportsPage() {
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
            className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary"
            href="/dashboard/templates"
          >
            Plantillas
          </Link>
          <Link
            className="flex h-full items-center border-b-2 border-primary px-4 text-sm font-medium"
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
            <h1 className="text-3xl font-bold">Informes</h1>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar datos
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Promedio general</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.8</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Departamento con mejor desempeño</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Ventas</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Evaluaciones completadas</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Área de mejora principal</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Comunicación</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Desempeño por departamento</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription>Comparativa del desempeño promedio por departamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="space-y-8 w-full px-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Ventas</div>
                        <div className="text-sm text-muted-foreground">8.5</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[85%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Marketing</div>
                        <div className="text-sm text-muted-foreground">7.8</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[78%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Operaciones</div>
                        <div className="text-sm text-muted-foreground">7.2</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[72%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Recursos Humanos</div>
                        <div className="text-sm text-muted-foreground">8.1</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[81%] rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Tendencia de desempeño</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription>Evolución del desempeño en los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-sm text-muted-foreground">Gráfico de tendencia (representación visual)</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="department">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="department">Por departamento</TabsTrigger>
                <TabsTrigger value="position">Por puesto</TabsTrigger>
                <TabsTrigger value="individual">Individual</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los períodos</SelectItem>
                    <SelectItem value="q1">Q1 2025</SelectItem>
                    <SelectItem value="q2">Q2 2025</SelectItem>
                    <SelectItem value="q3">Q3 2025</SelectItem>
                    <SelectItem value="q4">Q4 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TabsContent value="department" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informe por departamento</CardTitle>
                  <CardDescription>Análisis detallado del desempeño por departamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Ventas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Promedio general:</span>
                              <span className="text-sm">8.5/10</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Fortalezas:</span>
                              <span className="text-sm">Cierre de ventas, Negociación</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Áreas de mejora:</span>
                              <span className="text-sm">Seguimiento post-venta</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Marketing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Promedio general:</span>
                              <span className="text-sm">7.8/10</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Fortalezas:</span>
                              <span className="text-sm">Creatividad, Análisis de datos</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Áreas de mejora:</span>
                              <span className="text-sm">Planificación estratégica</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="position" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informe por puesto</CardTitle>
                  <CardDescription>Análisis detallado del desempeño por puesto</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seleccione la pestaña "Por puesto" para ver el análisis por posición.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="individual" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informe individual</CardTitle>
                  <CardDescription>Análisis detallado del desempeño individual</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seleccione la pestaña "Individual" para ver el análisis por empleado.
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
