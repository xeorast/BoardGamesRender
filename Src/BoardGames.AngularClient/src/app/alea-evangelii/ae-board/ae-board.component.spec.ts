import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AeBoardComponent } from './ae-board.component';

describe( 'AeBoardComponent', () => {
  let component: AeBoardComponent;
  let fixture: ComponentFixture<AeBoardComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [AeBoardComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( AeBoardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
