import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeRoomSelectorComponent } from './ae-room-selector.component';

describe( 'AeRoomSelectorComponent', () => {
  let component: AeRoomSelectorComponent;
  let fixture: ComponentFixture<AeRoomSelectorComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [AeRoomSelectorComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( AeRoomSelectorComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
