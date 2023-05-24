export type Player = "attacker" | "defender"

export type PieceType = "attacker" | "defender" | "commander"

export type BoardEntry = ( PieceType | null )

export interface Position {
    row: number,
    column: number
}
