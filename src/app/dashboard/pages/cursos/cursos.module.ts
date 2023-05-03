import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { PipesModule } from 'src/app/shared/pipes/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule,


    MatFormFieldModule,
    MatInputModule,

    MatTableModule,
    MatButtonModule,

    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,

    RouterModule.forChild([
      {
        // /dashboard/cursos
        path: '',
        component: CursosComponent
      }
    ])
  ]

})
export class CursosModule { }
