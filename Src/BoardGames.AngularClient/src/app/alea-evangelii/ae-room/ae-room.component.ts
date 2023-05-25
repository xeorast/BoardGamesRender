import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AeClientService } from '../ae-client/ae-client.service';
import { AeHubConnection } from '../ae-client/ae-hub-connection';

@Component( {
  selector: 'app-ae-room',
  templateUrl: './ae-room.component.html',
  styleUrls: ['./ae-room.component.css']
} )
export class AeRoomComponent implements OnInit, OnDestroy {

  public gameConnection?: AeHubConnection
  public get roomId() {
    return this.gameConnection?.roomId ?? null
  }
  public get game() {
    return this.gameConnection?.game ?? null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameClient: AeClientService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => this.connectTo( params.get( 'room-id' ) ) )
  }

  ngOnDestroy(): void {
    this.gameConnection?.disconnect()
  }

  connectTo( rommIdVal: string | null ) {
    let roomId = rommIdVal == null ? null : Number( rommIdVal )
    if ( this.gameConnection && roomId == this.gameConnection.roomId ) {
      return
    }

    this.gameClient.startConnection( roomId ).subscribe( con => {
      this.gameConnection?.disconnect()
      this.gameConnection = con
      con.joined.subscribe( joinRes => {
        this.router.navigate( ['/alea-evangelii-room', joinRes.roomId] );
      } )
    } )
  }

}