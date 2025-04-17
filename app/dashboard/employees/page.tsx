'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, UserPlus, Edit, Trash } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([
    {
      name: 'Juan Pérez',
      department: 'Ventas',
      position: 'Gerente de Ventas',
      startDate: '15/03/2020',
      status: 'Activo',
    },
    {
      name: 'María López',
      department: 'Marketing',
      position: 'Coordinadora de Marketing',
      startDate: '10/06/2021',
      status: 'Activo',
    },
  ]);
  
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    department: '',
    position: '',
    startDate: '',
    status: 'Activo',
  });

  const [editEmployee, setEditEmployee] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const addEmployee = () => {
    if (newEmployee.name && newEmployee.department && newEmployee.position && newEmployee.startDate) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({ name: '', department: '', position: '', startDate: '', status: 'Activo' });
    } else {
      alert('Todos los campos son requeridos.');
    }
  };

  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setOpen(true);
  };

  const saveEdit = () => {
    setEmployees(employees.map(emp => (emp.name === editEmployee.name ? editEmployee : emp)));
    setOpen(false);
  };

  const handleDelete = (name) => {
    setEmployees(employees.filter(emp => emp.name !== name));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
          <span className="font-bold text-xl">EvalPro</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <Link className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary" href="/dashboard">Dashboard</Link>
          <Link className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary" href="/dashboard/evaluations">Evaluaciones</Link>
          <Link className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary" href="/dashboard/templates">Plantillas</Link>
          <Link className="flex h-full items-center border-b-2 border-transparent px-4 text-sm font-medium transition-colors hover:border-primary" href="/dashboard/reports">Informes</Link>
          <Link className="flex h-full items-center border-b-2 border-primary px-4 text-sm font-medium" href="/dashboard/employees">Empleados</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">Mi empresa</Button>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Empleados</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input name="name" placeholder="Nombre" value={newEmployee.name} onChange={handleChange} />
            <Input name="department" placeholder="Departamento" value={newEmployee.department} onChange={handleChange} />
            <Input name="position" placeholder="Puesto" value={newEmployee.position} onChange={handleChange} />
            <Input name="startDate" placeholder="Fecha de ingreso" value={newEmployee.startDate} onChange={handleChange} />
          </div>

          <Button className="mt-2 w-fit" onClick={addEmployee}>
            <UserPlus className="mr-2 h-4 w-4" />
            Agregar empleado
          </Button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar empleados..." className="w-full bg-background pl-8" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lista de empleados</CardTitle>
              <CardDescription>Gestione los empleados de su organización</CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="hidden md:table">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Departamento</TableHead>
                    <TableHead>Puesto</TableHead>
                    <TableHead>Fecha de ingreso</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((emp, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{emp.name}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>{emp.position}</TableCell>
                      <TableCell>{emp.startDate}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold
                          ${emp.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                        `}>
                          {emp.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(emp)}>
                          <Edit className="h-4 w-4" />
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(emp.name)}>
                          <Trash className="h-4 w-4" />
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Vista en dispositivos móviles */}
              <div className="md:hidden">
                {employees.map((emp, index) => (
                  <div key={index} className="border-b py-4">
                    <div className="font-medium">{emp.name}</div>
                    <div className="text-sm text-muted-foreground">{emp.department} - {emp.position}</div>
                    <div className="text-sm text-muted-foreground">Ingreso: {emp.startDate}</div>
                    <div className="text-sm text-muted-foreground">Estado: 
                      <span className={`ml-1 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold
                        ${emp.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {emp.status}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(emp)}>
                        <Edit className="h-4 w-4" />
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(emp.name)}>
                        <Trash className="h-4 w-4" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Modal de edición */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar empleado</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="name"
              value={editEmployee?.name || ''}
              onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
              placeholder="Nombre"
            />
            <Input
              name="department"
              value={editEmployee?.department || ''}
              onChange={(e) => setEditEmployee({ ...editEmployee, department: e.target.value })}
              placeholder="Departamento"
            />
            <Input
              name="position"
              value={editEmployee?.position || ''}
              onChange={(e) => setEditEmployee({ ...editEmployee, position: e.target.value })}
              placeholder="Puesto"
            />
            <Input
              name="startDate"
              value={editEmployee?.startDate || ''}
              onChange={(e) => setEditEmployee({ ...editEmployee, startDate: e.target.value })}
              placeholder="Fecha de ingreso"
            />
            <div>
              <label className="text-sm font-medium">Estado</label>
              <Select
                value={editEmployee?.status || 'Activo'}
                onValueChange={(value) => setEditEmployee({ ...editEmployee, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Activo">Activo</SelectItem>
                  <SelectItem value="Inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={saveEdit} className="mt-4">Guardar cambios</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
