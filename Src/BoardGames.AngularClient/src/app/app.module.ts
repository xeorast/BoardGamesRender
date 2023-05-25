import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( [
      { path: '', loadChildren: () => import( './home/home.module' ).then( m => m.HomeModule ) },
      { path: 'alea-evangelii-room', loadChildren: () => import( './alea-evangelii/ae-room/ae-room.module' ).then( m => m.AeRoomModule ) },
    ] )
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
