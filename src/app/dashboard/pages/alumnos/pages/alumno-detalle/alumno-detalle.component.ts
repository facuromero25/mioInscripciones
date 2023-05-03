import { Component } from '@angular/core';
import { Alumno } from '../../alumnos.component';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent {
  alumno: Alumno | undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private AlumnosService: AlumnosService,
  ) {
    this.AlumnosService.obtenerAlumnoPorId(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((alumno) => this.alumno = alumno);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
