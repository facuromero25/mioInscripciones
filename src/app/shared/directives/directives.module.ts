import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepetirDirective } from './repetir.directive';
import { FontSizeDirective } from './font-size.directive';



@NgModule({
  declarations: [
    FontSizeDirective,
    RepetirDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FontSizeDirective,
    RepetirDirective
  ]
})
export class DirectivesModule { }
