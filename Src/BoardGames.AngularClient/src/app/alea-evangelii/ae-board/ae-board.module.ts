import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AeBoardComponent } from './ae-board.component';



@NgModule( {
  declarations: [
    AeBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AeBoardComponent
  ],
} )
export class AeBoardModule { }
