import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PipesModule } from "../../../shared/pipes/pipes.module";


@NgModule({
    declarations: [
        AlumnosComponent
    ],
    exports: [
        AlumnosComponent
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
            }
        ]),
        PipesModule
    ]
})
export class AlumnosModule { }
