
import { Chess } from "chess.js";
import { atom } from "recoil"



const ChessAtom = atom<Chess | null>({
    key : "ChessAtom",
    default: null
})

export {ChessAtom };