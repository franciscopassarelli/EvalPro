import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Building, Clock, Globe, HeartHandshake, Users } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export default function AcercaDePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 hero-pattern">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent text-slate-800">
                    Nuestra misión es potenciar el talento humano
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    En EvalPro, creemos que el éxito de las organizaciones depende del desarrollo y crecimiento de sus
                    colaboradores.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur-md opacity-75"></div>
                  <img
                    alt="Equipo de EvalPro"
                    className="relative rounded-lg object-cover border border-gray-200 bg-white p-2"
                    src="https://www.esan.edu.pe/images/blog/20220823/gP3j6F.png"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 animated-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent">
                  Nuestra historia
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fundada en 2020, EvalPro nació de la necesidad de transformar los procesos tradicionales de evaluación
                  de desempeño en experiencias significativas y orientadas al crecimiento.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 mb-4 text-white">
                    <Clock className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2020</h3>
                    <p className="text-gray-500">
                      Fundación de EvalPro con la misión de transformar la evaluación de desempeño en las
                      organizaciones.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 mb-4 text-white">
                    <Users className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2022</h3>
                    <p className="text-gray-500">
                      Alcanzamos los 500 clientes y expandimos nuestras operaciones a toda Latinoamérica.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center space-y-4 text-center card-hover gradient-card">
                <CardContent className="pt-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 mb-4 text-white">
                    <Globe className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2025</h3>
                    <p className="text-gray-500">
                      Presencia global con más de 2,000 empresas utilizando nuestra plataforma en 15 países distintos del mundo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-heading">
                  Nuestros valores
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los principios que guían nuestras decisiones y definen nuestra cultura
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center bg-slate-800 p-6 rounded-lg card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white">
                  <Award className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Excelencia</h3>
                  <p className="text-gray-300">
                    Nos esforzamos por ofrecer la mejor experiencia y soluciones de la más alta calidad a nuestros
                    clientes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center bg-slate-800 p-6 rounded-lg card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Colaboración</h3>
                  <p className="text-gray-300">
                    Creemos en el poder del trabajo en equipo y la colaboración para lograr resultados extraordinarios.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center bg-slate-800 p-6 rounded-lg card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white">
                  <Building className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Integridad</h3>
                  <p className="text-gray-300">
                    Actuamos con honestidad, transparencia y ética en todas nuestras interacciones y decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 animated-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl title-accent">
                  Nuestro equipo
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conozca a las personas detrás de EvalPro
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center card-hover p-6 rounded-lg gradient-card">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-md opacity-75"></div>
                  <img
                    alt="Foto de perfil"
                    className="relative rounded-full object-cover h-32 w-32 border-2 border-white"
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">María Rodríguez</h3>
                  <p className="text-primary font-medium">CEO & Fundadora</p>
                  <p className="text-gray-500">
                    Con más de 15 años de experiencia en RRHH y desarrollo organizacional.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center card-hover p-6 rounded-lg gradient-card">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-md opacity-75"></div>
                  <img
                    alt="Foto de perfil"
                    className="relative rounded-full object-cover h-32 w-32 border-2 border-white"
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Carlos Méndez</h3>
                  <p className="text-primary font-medium">CTO</p>
                  <p className="text-gray-500">
                    Ingeniero de software con pasión por crear soluciones tecnológicas innovadoras.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center card-hover p-6 rounded-lg gradient-card">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-md opacity-75"></div>
                  <img
                    alt="Foto de perfil"
                    className="relative rounded-full object-cover h-32 w-32 border-2 border-white"
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ana Gómez</h3>
                  <p className="text-primary font-medium">Directora de Producto</p>
                  <p className="text-gray-500">
                    Especialista en experiencia de usuario y diseño de productos centrados en las personas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-heading">
                  Únase a nuestra comunidad
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Más de 2,000 empresas ya confían en EvalPro para transformar su gestión del talento
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                    Comenzar ahora
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="px-8 rounded-full text-black">
                    Contactar con ventas
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
