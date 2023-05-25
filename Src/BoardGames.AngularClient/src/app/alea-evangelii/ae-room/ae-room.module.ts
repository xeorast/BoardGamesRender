import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeBoardModule } from '../ae-board/ae-board.module';
import { AeClientModule } from '../ae-client/ae-client.module';
import { AeRoomComponent } from './ae-room.component';


const routes: Routes = [
  { path: '', component: AeRoomComponent },
];

@NgModule( {
  declarations: [
    AeRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    AeBoardModule,
    AeClientModule
  ]
} )
export class AeRoomModule { }
