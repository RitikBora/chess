"use client"
import { Board } from "@/components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen justify-center items-center">
        <Board/>
      </div>
    </DndProvider>
  );
}
