import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Users,
  LineChart,
  PieChart,
  Activity,
  FileText,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { FloatingBackground } from "@/components/floating-background";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 hero-pattern relative overflow-hidden">
          <FloatingBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent text-slate-800">
                    Evaluación de desempeño simplificada
                  </h1>
                  <p className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Plataforma integral para crear, gestionar y analizar evaluaciones de desempeño para todos los niveles de su organización.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline" className="px-8 rounded-full">
                      Conocer más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[550px]">
                  <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-slate-800">Panel de Evaluación</h3>
                      <div className="flex space-x-2">
                        <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                        <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
                        <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Evaluaciones</span>
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mt-2">24</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Empleados</span>
                          <Users className="h-5 w-5 text-purple-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mt-2">78</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Promedio</span>
                          <Activity className="h-5 w-5 text-indigo-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mt-2">7.8</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-slate-600 mb-3">Desempeño por departamento</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium text-slate-700">Ventas</span>
                            <span className="text-slate-600">8.5</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium text-slate-700">Marketing</span>
                            <span className="text-slate-600">7.8</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium text-slate-700">Operaciones</span>
                            <span className="text-slate-600">7.2</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "72%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <LineChart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <PieChart className="h-4 w-4 text-indigo-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
  <Link href="/dashboard">
    <Button variant="outline" size="sm">
      Ver demo gratuita
    </Button>
  </Link>
</div>

                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section con las cards actualizadas */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 animated-bg relative">
          <FloatingBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent text-slate-800">
                  Características principales
                </h2>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Todo lo que necesita para evaluar y mejorar el rendimiento de su equipo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">Plantillas predefinidas</h3>
                    <p className="text-slate-700">
                      Acceda a plantillas específicas para diferentes roles: mandos medios, vendedores, operativos y más.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">Evaluaciones personalizadas</h3>
                    <p className="text-slate-700">
                      Diseñe evaluaciones únicas adaptadas a las necesidades específicas de su empresa.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">Informes detallados</h3>
                    <p className="text-slate-700">
                      Obtenga informes individuales y grupales para analizar resultados por departamento, gerencias y más.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
