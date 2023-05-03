import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Alumno } from '../alumnos.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

 private estudiantes$ = new BehaviorSubject<Alumno[]>([
   {
     id: 1,
     nombre: 'Juan',
     apellido: 'Perez',
     fecha_registro: new Date()
   },
   {
     id: 2,
     nombre: 'Luz',
     apellido: 'Belgrano',
     fecha_registro: new Date()
   },
   {
     id: 3,
     nombre: 'Cami',
     apellido: 'Contreraz',
     fecha_registro: new Date()
   },
 ])
  constructor() { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
