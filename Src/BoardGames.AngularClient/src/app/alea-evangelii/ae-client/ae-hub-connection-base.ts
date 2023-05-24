import * as signalR from "@microsoft/signalr";
import { from as fromPromise, Observable } from 'rxjs';
import { MoveResult, MoveSummary } from '../logic/game';
import { BoardEntry, Player, Position } from "../logic/types";

export abstract class AeHubConnectionBase {

    constructor(
        private hubConnection: signalR.HubConnection
    ) {
        this.hubConnection.on( 'JoinedAs', jr => this.onJoinedAs( jr ) )
        this.hubConnection.on( 'MovePerformed', ms => this.onMovePerformed( ms ) )
        this.hubConnection.on( 'Disconnect', dr => this.onDisconnect( dr ) )
    }

    protected abstract onJoinedAs( joinRes: JoinResult ): void
    protected abstract onMovePerformed( moveSummary: MoveSummary ): void
    protected abstract onDisconnect( disconnectReason: string ): void

    move( from: Position, to: Position ): Observable<MoveResult> {
        let promise = this.hubConnection.invoke( 'Move', from, to )
        return fromPromise( promise )
    }

    getBoardState(): Observable<BoardEntry[][]> {
        let promise = this.hubConnection.invoke( 'GetBoardState' )
        return fromPromise( promise )
    }

}

export interface JoinResult {
    joinedAs: Player
    nowPlaying: Player
    roomId: number
    boardState: BoardEntry[][]
}