import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { FloatingBackground } from "@/components/floating-background"
import Link from "next/link"


export default function PreciosPage() {
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
                  Planes adaptados a las necesidades de su empresa
                </h1>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elija el plan que mejor se adapte al tamaño y necesidades de su organización
                </p>
              </div>
            </div>
          </div>
        </section>

      

        <section className="w-full py-12 md:py-24 lg:py-32 animated-bg relative">
          <FloatingBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col card-hover border-transparent shadow-lg">
              <CardHeader className="pb-6">
    <CardTitle className="text-xl text-slate-800">Básico</CardTitle>
    <CardDescription className="text-slate-600">Para pequeñas empresas en crecimiento</CardDescription>
    <div className="mt-4">
      <span className="text-4xl font-bold gradient-heading">$0</span>
      <span className="text-slate-600 ml-2">/mes</span>
    </div>
  </CardHeader>
  <CardContent className="flex-1">
    <ul className="grid gap-3">
      <li className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-slate-700">Hasta 50 empleados</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-slate-700">Plantillas predefinidas</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-slate-700">Informes básicos</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-slate-700">Soporte por correo electrónico</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-slate-700">1 administrador</span>
      </li>
    </ul>
  </CardContent>
  <CardFooter>
    <Link href="/dashboard" className="w-full">
      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
        Comenzar prueba gratuita
      </Button>
    </Link>
  </CardFooter>
              </Card>
              <Card className="flex flex-col card-hover relative border-transparent shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg"></div>
                <CardHeader className="pb-6">
                  <div className="px-4 py-1 text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-fit mb-2">
                    Más popular
                  </div>
                  <CardTitle className="text-xl text-slate-800">Profesional</CardTitle>
                  <CardDescription className="text-slate-600">Para empresas medianas en expansión</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold gradient-heading">$19</span>
                    <span className="text-slate-600 ml-2">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Hasta 200 empleados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Plantillas personalizables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Informes avanzados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Soporte prioritario</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">5 administradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Integración con RRHH</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                  Contactar ventas
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col card-hover border-transparent shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-slate-800">Empresarial</CardTitle>
                  <CardDescription className="text-slate-600">Para grandes organizaciones</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold gradient-heading">$39</span>
                    <span className="text-slate-600 ml-2">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Empleados ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Plantillas avanzadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Análisis predictivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Soporte 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Administradores ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">API completa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">Personalización total</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                    Contactar ventas
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Preguntas frecuentes</h2>
                  <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Respuestas a las preguntas más comunes sobre nuestros planes y servicios
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2 bg-slate-800 p-6 rounded-lg card-hover">
                    <h3 className="text-xl font-bold text-white">¿Puedo cambiar de plan en cualquier momento?</h3>
                    <p className="text-gray-200">
                      Sí, puede actualizar o cambiar su plan en cualquier momento. Los cambios se aplicarán
                      inmediatamente y se ajustará el cobro de forma proporcional.
                    </p>
                  </div>
                  <div className="space-y-2 bg-slate-800 p-6 rounded-lg card-hover">
                    <h3 className="text-xl font-bold text-white">
                      ¿Ofrecen descuentos para organizaciones sin fines de lucro?
                    </h3>
                    <p className="text-gray-200">
                      Sí, ofrecemos descuentos especiales para organizaciones educativas y sin fines de lucro. Contacte
                      con nuestro equipo de ventas para más información.
                    </p>
                  </div>
                  <div className="space-y-2 bg-slate-800 p-6 rounded-lg card-hover">
                    <h3 className="text-xl font-bold text-white">¿Cuánto dura la prueba gratuita?</h3>
                    <p className="text-gray-200">
                      Todas nuestras pruebas gratuitas tienen una duración de 14 días, con acceso completo a todas las
                      funcionalidades del plan seleccionado.
                    </p>
                  </div>
                  <div className="space-y-2 bg-slate-800 p-6 rounded-lg card-hover">
                    <h3 className="text-xl font-bold text-white">
                      ¿Necesito proporcionar una tarjeta de crédito para la prueba?
                    </h3>
                    <p className="text-gray-200">
                      No, no es necesario proporcionar información de pago para comenzar su prueba gratuita. Solo se le
                      pedirá cuando decida continuar con un plan de pago.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    ¿Necesita un plan personalizado?
                  </h2>
                  <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contacte con nuestro equipo de ventas para diseñar una solución a medida para su organización
                  </p>
                </div>
                <div className="space-y-4 bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white">Contáctenos</h3>
                  <p className="text-gray-200">
                    Nuestro equipo estará encantado de ayudarle a encontrar la mejor solución para sus necesidades.
                  </p>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-gray-200">Nombre</label>
                        <input
                          className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Ingrese su nombre"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-gray-200">Empresa</label>
                        <input
                          className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Nombre de su empresa"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-gray-200">Correo electrónico</label>
                      <input
                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="correo@empresa.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-gray-200">Mensaje</label>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Describa sus necesidades"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                      Enviar mensaje
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
