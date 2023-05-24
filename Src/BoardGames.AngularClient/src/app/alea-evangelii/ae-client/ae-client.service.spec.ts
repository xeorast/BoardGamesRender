import { TestBed } from '@angular/core/testing';

import { AeClientService } from './ae-client.service';

describe( 'AeClientService', () => {
  let service: AeClientService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( AeClientService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
