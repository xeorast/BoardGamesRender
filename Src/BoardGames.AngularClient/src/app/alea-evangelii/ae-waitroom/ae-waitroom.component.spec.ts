import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeWaitroomComponent } from './ae-waitroom.component';

describe( 'AeWaitroomComponent', () => {
  let component: AeWaitroomComponent;
  let fixture: ComponentFixture<AeWaitroomComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [AeWaitroomComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( AeWaitroomComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
