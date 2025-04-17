import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  CheckCircle,
  ClipboardCheck,
  FileText,
  LineChart,
  PieChart,
  Settings,
  Shield,
  Users,
} from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { FloatingBackground } from "@/components/floating-background"


export default function CaracteristicasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 hero-pattern relative overflow-hidden">
          <FloatingBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent text-slate-800">
                  Características completas para evaluaciones efectivas
                </h1>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra todas las herramientas que EvalPro ofrece para transformar la evaluación de desempeño en su
                  organización
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 animated-bg relative">
          <FloatingBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Plantillas personalizables</h3>
                <p className="text-slate-700">
                  Cree evaluaciones a medida para cada departamento o utilice nuestras plantillas predefinidas para
                  diferentes roles como mandos medios, vendedores y operativos.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Plantillas predefinidas por rol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Editor de plantillas intuitivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Reutilización de plantillas</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Evaluaciones flexibles</h3>
                <p className="text-slate-700">
                  Configure evaluaciones con diferentes tipos de preguntas, escalas de valoración y secciones para
                  adaptarse a las necesidades específicas de su empresa.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Múltiples tipos de preguntas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Escalas personalizables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Secciones organizadas</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Gestión de empleados</h3>
                <p className="text-slate-700">
                  Organice a sus empleados por departamentos, equipos o roles para facilitar la asignación de
                  evaluaciones y el seguimiento del desempeño.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Estructura organizacional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Perfiles detallados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Historial de evaluaciones</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Informes detallados</h3>
                <p className="text-slate-700">
                  Obtenga informes individuales y grupales con análisis detallados del desempeño, identificando
                  fortalezas y áreas de mejora.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Informes individuales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Análisis por departamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Comparativas de desempeño</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Seguimiento de tendencias</h3>
                <p className="text-slate-700">
                  Analice la evolución del desempeño a lo largo del tiempo con gráficos y visualizaciones que muestran
                  tendencias y patrones.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Gráficos de evolución</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Comparativas temporales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Identificación de patrones</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Análisis avanzado</h3>
                <p className="text-slate-700">
                  Utilice herramientas de análisis avanzado para identificar correlaciones, detectar áreas de mejora y
                  tomar decisiones basadas en datos.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Identificación de fortalezas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Detección de áreas de mejora</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Recomendaciones personalizadas</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Personalización completa</h3>
                <p className="text-slate-700">
                  Adapte el sistema a la imagen de su empresa con opciones de personalización de logotipos, colores y
                  terminología.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Personalización de marca</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Adaptación de terminología</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Configuración flexible</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 card-hover p-6 rounded-lg gradient-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Seguridad y privacidad</h3>
                <p className="text-slate-700">
                  Proteja la información sensible de sus evaluaciones con medidas de seguridad avanzadas y controles de
                  acceso granulares.
                </p>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Encriptación de datos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Control de acceso por roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Cumplimiento normativo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Transforme la gestión del talento en su organización
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únase a cientos de empresas que ya están mejorando el desempeño de sus equipos con EvalPro
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                <Button className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
  Comenzar ahora
</Button>

                </Link>
                <Link href="/precios">
                <Button variant="outline" className="px-8 rounded-full text-black">
  Ver planes
</Button>

                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
