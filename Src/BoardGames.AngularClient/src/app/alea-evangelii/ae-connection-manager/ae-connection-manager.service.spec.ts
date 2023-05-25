import { TestBed } from '@angular/core/testing';

import { AeConnectionManagerService } from './ae-connection-manager.service';

describe( 'AeConnectionManagerService', () => {
  let service: AeConnectionManagerService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( AeConnectionManagerService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
