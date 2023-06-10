import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeClientService } from '../ae-client/ae-client.service';
import { AeConnectionManagerService } from '../ae-connection-manager/ae-connection-manager.service';

@Component( {
  selector: 'app-ae-room-selector',
  templateUrl: './ae-room-selector.component.html',
  styleUrls: ['./ae-room-selector.component.scss']
} )
export class AeRoomSelectorComponent implements OnInit {

  public isConnecting = false
  public errorMessage?: string
  public roomIdStr: string = ''
  public get roomId() {
    return this.roomIdStr == '' ? null : +this.roomIdStr
  }

  constructor(
    private router: Router,
    private gameClient: AeClientService,
    private gameConnMan: AeConnectionManagerService
  ) { }

  ngOnInit(): void {
  }

  public goToNewRoom() {
    this.goToRoom( null )
  }

  public goToSelectedRoom() {
    this.goToRoom( this.roomId )
  }

  private goToRoom( roomId: number | null ) {
    this.isConnecting = true
    this.gameClient.startConnection( roomId ).subscribe( con => {
      this.gameConnMan.gameConnection?.disconnect()
      this.gameConnMan.gameConnection = con
      con.joined.subscribe( joinRes => {
        this.isConnecting = false
        this.router.navigate( ['/alea-evangelii', joinRes.roomId], { queryParams: { 'player': joinRes.joinedAs } } );
      } )
      con.disconnected.subscribe( reason => {
        this.errorMessage = reason
        this.isConnecting = false
      } )
    } )
  }

}
