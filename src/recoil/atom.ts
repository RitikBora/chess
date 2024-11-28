import { atom } from "recoil"

type SelectedGrid = {
    rank: string,
    file: string 
}
const selectedGridAtom = atom<SelectedGrid>({
    key: "selectedGridAtom",
    default: {
        rank : "",
        file : "" 
    }
})

const tempAtom = atom({
    key: "tempAtom",
    default: 1
})

export {selectedGridAtom , tempAtom};