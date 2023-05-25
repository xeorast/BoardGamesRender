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
      { path: 'alea-evangelii', loadChildren: () => import( './alea-evangelii/alea-evangelii.module' ).then( m => m.AleaEvangeliiModule ) },
    ] )
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
