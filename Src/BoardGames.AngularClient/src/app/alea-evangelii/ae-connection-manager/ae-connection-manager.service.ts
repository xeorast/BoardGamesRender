import { Injectable } from '@angular/core';
import { AeHubConnection } from '../ae-client/ae-hub-connection';

@Injectable( {
  providedIn: 'root'
} )
export class AeConnectionManagerService {

  constructor() { }

  public gameConnection: AeHubConnection | null = null

}
