
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

const TurnAtom = atom<'w'|'b'>({
    key : "TurnAtomKey",
    default: "w"
})

const BlackTimeAtom = atom({
    key: "BlackTimeKey",
    default: 600
});

const WhiteTimeAtom = atom({
    key: "WhiteTimeKey",
    default: 600
});




export {BoardAtom , TurnAtom , WhiteTimeAtom , BlackTimeAtom};