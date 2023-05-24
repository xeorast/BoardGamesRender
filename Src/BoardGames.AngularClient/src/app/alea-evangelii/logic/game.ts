import { Observable } from "rxjs"
import { Board } from "./board"
import { Player, Position } from "./types"

export class Game {
    constructor(
        public board: Board,
        public playingAs: Player,
        public nowPlaying: Player,
        private moveCallback: ( from: Position, to: Position ) => Observable<MoveResult>
    ) { }

    private selectedPiece: Position | null = null
    private possibleMoves: Position[] = []

    selectPiece( row: number, column: number ) {
        if ( !this.canMoveFrom( row, column ) ) {
            return
        }

        if ( this.isSelected( row, column ) ) {
            this.unselectPiece()
            return
        }

        this.selectedPiece = { row, column }
        this.possibleMoves = this.board.getMovesPosibleFrom( row, column )
    }

    private unselectPiece() {
        this.selectedPiece = null
        this.possibleMoves = []
    }

    isSelected( row: number, column: number ) {
        return row == this.selectedPiece?.row && column == this.selectedPiece.column
    }

    canMoveFrom( row: number, column: number ) {
        if ( this.nowPlaying != this.playingAs ) {
            return false
        }

        let piece = this.board.pieceAt( row, column )
        return this.playingAs == "attacker" && piece == "attacker"
            || this.playingAs == "defender" && ( piece == "defender" || piece == "commander" )
    }

    canMoveTo( row: number, column: number ) {
        if ( !this.selectedPiece ) {
            return false
        }

        return this.possibleMoves.find( p => p.row == row && p.column == column ) != undefined
    }

    moveTo( row: number, column: number ) {
        if ( !this.selectedPiece || !this.canMoveTo( row, column ) ) {
            return
        }

        this.moveCallback( this.selectedPiece, { row, column } ).subscribe( result => {
            if ( !result.success || !result.summary ) {
                return
            }

            this.applyMove( result.summary )
            this.unselectPiece()
        } )
    }

    applyMove( ms: MoveSummary ) {
        this.board.move( ms.from, ms.to )
        for ( const captured of ms.captured ) {
            this.board.capture( captured )
        }
        this.nowPlaying = this.nowPlaying == "attacker" ? "defender" : "attacker"
    }

}

export interface MoveSummary {
    from: Position
    to: Position
    captured: Position[]
}

export interface MoveResult {
    summary: MoveSummary | undefined
    success: boolean
}
