import { Color, PieceSymbol, Square } from "chess.js"
import { atom } from "recoil"

type SelectedGrid = {
    rank: string,
    file: string,
    isSelected: boolean
}
const selectedGridAtom = atom<SelectedGrid>({
    key: "selectedGridAtom",
    default: {
        rank : "",
        file : "",
        isSelected: false
    }
})

const IsMoveStartedAtom = atom({
    key : "isMoveStartedAtom",
    default : false
})

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


export {selectedGridAtom , IsMoveStartedAtom , BoardAtom };