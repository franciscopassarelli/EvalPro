import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Loader } from "@/components/ui/loader"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EvalPro - Evaluación de desempeño simplificada",
  description:
    "Plataforma integral para crear, gestionar y analizar evaluaciones de desempeño para todos los niveles de su organización.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
        <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
    </html>
  )
}


import './globals.css'