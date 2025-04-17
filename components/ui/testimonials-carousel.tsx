"use client"

import { Carousel } from "@/components/ui/carousel"

const testimonials = [
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Transformamos nuestra evaluación de desempeño",
    description:
      "EvalPro nos ha permitido simplificar todo el proceso de evaluación y obtener insights valiosos sobre nuestro equipo.",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Incrementamos la productividad en un 25%",
    description:
      "Gracias a las evaluaciones personalizadas, pudimos identificar áreas de mejora y potenciar el talento de nuestros colaboradores.",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Decisiones basadas en datos reales",
    description:
      "Los informes detallados nos permiten tomar decisiones estratégicas basadas en información concreta y no en percepciones.",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Implementación rápida y sencilla",
    description:
      "En menos de una semana teníamos todo el sistema funcionando y nuestro equipo adaptado a la plataforma.",
  },
]

export function TestimonialsCarousel() {
  return <Carousel items={testimonials} autoPlay={true} interval={5000} />
}
