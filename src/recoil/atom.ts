
import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { atom } from "recoil"



type Board = ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]

const emptyBoard: Board = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));

const BoardAtom = atom<Board>({
    key: "boardAtom",
    default: emptyBoard
})



export {BoardAtom};