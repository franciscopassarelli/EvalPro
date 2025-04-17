"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"

export default function CreateEvaluationPage() {
  const [sections, setSections] = useState([
    { title: "Competencias técnicas", questions: ["Dominio de herramientas y procesos", "Conocimiento técnico"] },
    { title: "Habilidades interpersonales", questions: ["Comunicación", "Trabajo en equipo"] },
  ])

  const addSection = () => {
    setSections([...sections, { title: "Nueva sección", questions: ["Nueva pregunta"] }])
  }

  const addQuestion = (sectionIndex: number) => {
    const newSections = [...sections]
    newSections[sectionIndex].questions.push("Nueva pregunta")
    setSections(newSections)
  }

  const updateSectionTitle = (sectionIndex: number, title: string) => {
    const newSections = [...sections]
    newSections[sectionIndex].title = title
    setSections(newSections)
  }

  const updateQuestion = (sectionIndex: number, questionIndex: number, question: string) => {
    const newSections = [...sections]
    newSections[sectionIndex].questions[questionIndex] = question
    setSections(newSections)
  }

  const removeQuestion = (sectionIndex: number, questionIndex: number) => {
    const newSections = [...sections]
    newSections[sectionIndex].questions.splice(questionIndex, 1)
    setSections(newSections)
  }

  const removeSection = (sectionIndex: number) => {
    const newSections = [...sections]
    newSections.splice(sectionIndex, 1)
    setSections(newSections)
  }

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
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/evaluations">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Crear nueva evaluación</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Información general</CardTitle>
              <CardDescription>Defina los detalles básicos de la evaluación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título de la evaluación</Label>
                <Input id="title" placeholder="Ej: Evaluación de desempeño anual" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Describa el propósito y alcance de esta evaluación" rows={3} />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Seleccionar departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los departamentos</SelectItem>
                      <SelectItem value="sales">Ventas</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="operations">Operaciones</SelectItem>
                      <SelectItem value="hr">Recursos Humanos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Puesto</Label>
                  <Select>
                    <SelectTrigger id="position">
                      <SelectValue placeholder="Seleccionar puesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los puestos</SelectItem>
                      <SelectItem value="manager">Gerentes</SelectItem>
                      <SelectItem value="supervisor">Supervisores</SelectItem>
                      <SelectItem value="sales">Vendedores</SelectItem>
                      <SelectItem value="operator">Operativos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Secciones y preguntas</h2>
            {sections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="mb-6">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 flex-1 mr-4">
                      <Label htmlFor={`section-${sectionIndex}`}>Título de la sección</Label>
                      <Input
                        id={`section-${sectionIndex}`}
                        value={section.title}
                        onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSection(sectionIndex)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="flex items-start gap-2">
                      <div className="flex-1">
                        <Label htmlFor={`question-${sectionIndex}-${questionIndex}`} className="mb-2 block">
                          Pregunta {questionIndex + 1}
                        </Label>
                        <Input
                          id={`question-${sectionIndex}-${questionIndex}`}
                          value={question}
                          onChange={(e) => updateQuestion(sectionIndex, questionIndex, e.target.value)}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeQuestion(sectionIndex, questionIndex)}
                        className="mt-8 text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => addQuestion(sectionIndex)} className="mt-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar pregunta
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" onClick={addSection} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Agregar sección
            </Button>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard/evaluations">Cancelar</Link>
            </Button>
            <Button>Guardar evaluación</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
