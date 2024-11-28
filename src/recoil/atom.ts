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


export {selectedGridAtom};