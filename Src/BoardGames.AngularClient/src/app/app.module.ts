import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, TitleStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { ParametrizedTitleStrategy } from './parametrized-title-strategy';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( [
      { path: '', title: 'Home | Board games', loadChildren: () => import( './home/home.module' ).then( m => m.HomeModule ) },
      { path: 'alea-evangelii', loadChildren: () => import( './alea-evangelii/alea-evangelii.module' ).then( m => m.AleaEvangeliiModule ) },
    ] )
  ],
  providers: [
    { provide: TitleStrategy, useClass: ParametrizedTitleStrategy }
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
