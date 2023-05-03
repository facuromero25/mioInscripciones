import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/pipes/nombre-completo.pipe';
import { FontSizeDirective } from './directives/font-size.directive';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes/pipes.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    DirectivesModule,
    PipesModule,
  ],
  providers:[

  ]
})
export class SharedModule { }
