"use client"
import { Board } from "@/components/Board";
import { ChessTimer } from "@/components/ChessTimer";
import { TurnAtom } from "@/recoil/atom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";
import { useRecoilValue } from "recoil";


export default function Home() {
  const turn = useRecoilValue(TurnAtom);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-16 h-screen justify-center items-center bg-stone-800">
          <Board/>
          <div className="h-[640px] flex flex-col justify-between py-12">
            <ChessTimer initialTime={600} isWhite={false} isActive={turn === 'b'} onTimeUp={() => {}}/>
            <ChessTimer initialTime={600} isWhite={true} isActive={turn === 'w'} onTimeUp={() => {}}/>
          </div>
        </div>
      </DndProvider>
      <ToastContainer/>
    </div>
  );
}
