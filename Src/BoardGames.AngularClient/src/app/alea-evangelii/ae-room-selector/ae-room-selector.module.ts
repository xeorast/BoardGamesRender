import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AeClientModule } from '../ae-client/ae-client.module';
import { AeRoomSelectorComponent } from './ae-room-selector.component';



@NgModule( {
  declarations: [
    AeRoomSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AeClientModule
  ],
  exports: [
    AeRoomSelectorComponent
  ]
} )
export class AeRoomSelectorModule { }
