import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../logic/game';
import { Position } from '../logic/types';

@Component( {
  selector: 'app-alea-evangelii-board',
  templateUrl: './ae-board.component.html',
  styleUrls: ['./ae-board.component.scss']
} )
export class AeBoardComponent implements OnInit {

  private _game?: Game;
  private _fields?: AeFieldModel[];

  @Input()
  public get game(): Game | undefined { return this._game; }
  public set game( value: Game | undefined ) {
    this._game = value;
    if ( value ) {
      this._fields = this.generateFields( value )
    }
  }
  public get fields() { return this._fields }

  constructor() { }

  ngOnInit(): void {
  }

  generateFields( game: Game ) {
    let fields: AeFieldModel[] = []
    for ( let row = 0; row < game.board.height; row++ ) {
      for ( let column = 0; column < game.board.width; column++ ) {
        fields.push( new AeFieldModel( game, { row, column } ) )
      }
    }
    return fields
  }

}

export class AeFieldModel {
  public row: number
  public column: number
  public isCorner: boolean

  constructor(
    private game: Game,
    pos: Position ) {
    this.row = pos.row
    this.column = pos.column
    this.isCorner = game.board.isCorner( pos.row, pos.column )
  }

  public get piece() {
    return this.game.board.pieceAt( this.row, this.column )
  }

  public get canPieceBeMovedTo() {
    return this.game.canMoveTo( this.row, this.column )
  }

  public get canPieceBeMovedFrom() {
    return this.game.canMoveFrom( this.row, this.column )
  }

  public get isSelected() {
    return this.game.isSelected( this.row, this.column )
  }

  public moveTo() {
    this.game.moveTo( this.row, this.column )
  }

  public select() {
    this.game.selectPiece( this.row, this.column )
  }

}
