"use client"
import { Board } from "@/components/Board";
import { ChessTimer } from "@/components/ChessTimer";
import { BlackTimeAtom, TurnAtom, WhiteTimeAtom } from "@/recoil/atom";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";


export default function Home() {
  const turn = useRecoilValue(TurnAtom);
  const setWhiteTime = useSetRecoilState(WhiteTimeAtom);
  const setBlackTime = useSetRecoilState(BlackTimeAtom);


  useEffect(() =>
  {
    setWhiteTime(10);
    setBlackTime(10);
  } , []);
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-16 h-screen justify-center items-center bg-stone-800">
          <Board/>
          <div className="h-[640px] flex flex-col justify-between py-12">
            <ChessTimer initialTime={10} isWhite={false} isActive={turn === 'b'} />
            <ChessTimer initialTime={10} isWhite={true} isActive={turn === 'w'} />
          </div>
        </div>
      </DndProvider>
      <ToastContainer/>
    </div>
  );
}
