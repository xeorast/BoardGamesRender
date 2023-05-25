import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import( './ae-waitroom/ae-waitroom.module' ).then( m => m.AeWaitroomModule ) },
  { path: ':room-id', loadChildren: () => import( './ae-room/ae-room.module' ).then( m => m.AeRoomModule ) },
];

@NgModule( {
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
} )
export class AleaEvangeliiModule { }
