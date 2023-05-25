import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeRoomSelectorModule } from '../ae-room-selector/ae-room-selector.module';
import { AeWaitroomComponent } from './ae-waitroom.component';


const routes: Routes = [
  { path: '', component: AeWaitroomComponent }
];

@NgModule( {
  declarations: [
    AeWaitroomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    AeRoomSelectorModule
  ]
} )
export class AeWaitroomModule { }
