import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';




export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro', 'eliminar', 'editar'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
  ) {
    this.alumnosService.obtenerAlumnos()
      .subscribe((alumnos) => {
        this.dataSource.data = alumnos;
      })
  }






  eliminarAlumno(alumnoParaEliminar: Alumno): void {
    this.dataSource.data = this.dataSource.data.filter(
      (alumnoActual) => alumnoActual.id !== alumnoParaEliminar.id,
    );
  }


}
