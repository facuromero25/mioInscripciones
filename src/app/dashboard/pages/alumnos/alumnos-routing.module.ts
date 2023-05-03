import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent
      }
    ])
  ],
  exports: [
    RouterModule,
  ]
})


export class AlumnosRoutingModule { }
