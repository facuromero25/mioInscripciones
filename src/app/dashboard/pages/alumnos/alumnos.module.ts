import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';
import { PipesModule } from 'src/app/shared/pipes/pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      },
    ]),
  ],
  exports: [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
