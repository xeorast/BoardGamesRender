import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AeRoomComponent } from './ae-room.component';
import { AeBoardModule } from '../ae-board/ae-board.module';
import { AeClientModule } from '../ae-client/ae-client.module';


const routes: Routes = [
  { path: '', component: AeRoomComponent },
  { path: ':room-id', component: AeRoomComponent }
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
