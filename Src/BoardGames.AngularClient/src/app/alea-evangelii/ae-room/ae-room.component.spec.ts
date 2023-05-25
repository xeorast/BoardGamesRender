import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeRoomComponent } from './ae-room.component';

describe( 'AeRoomComponent', () => {
  let component: AeRoomComponent;
  let fixture: ComponentFixture<AeRoomComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [AeRoomComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( AeRoomComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
