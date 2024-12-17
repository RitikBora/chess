"use client"

import { useRecoilState } from "recoil";
import { Grid } from "./Grid";
import { Chess } from 'chess.js';
import { useEffect, useState } from "react";

import { useDrop } from "react-dnd";
import { BoardAtom, TurnAtom} from "@/recoil/atom";
import { showErrorMessage } from "@/lib/utils";
import { GameOverPopup } from "./GameOverPopup";
import { Row } from "./Row";




export const Board = () =>
{
    
    
     const [chess , setChess] = useState<Chess|null>(null);
     const [board , setBoard] = useRecoilState(BoardAtom);
     const [turn , setTurn] = useRecoilState(TurnAtom);
     const [openGameOver , setOpenGameOverPopup] = useState(false);
    
    useEffect(() => 
    {
        setChess(new Chess()); 
    } , []);

    useEffect(() =>
    {
        if(chess)
            setBoard(chess.board());
    } , [chess]);

    

  
    
const [{ isOver }, drop] = useDrop(() => ({
  accept: "piece", 
  drop: (item: { id: string; position: string }, monitor) => {
    const dropTarget = monitor.getClientOffset(); 
    
     let dropElement = document.elementFromPoint(
      dropTarget?.x || 0,
      dropTarget?.y || 0
    ); 

    let key = dropElement?.getAttribute("data-key");

    if(key === null || key === undefined)
    {
        const parentElement = dropElement?.parentElement?.parentElement;
        key = parentElement?.getAttribute("data-key");
     
    }
 
    const dropPosition = key;
  
    return { position: dropPosition }; 
  },
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  }),
}));



const movePiece = (from : string , to : string) =>
  {
    try
    {
      if(chess && board)
      {
        chess.move({from , to});
        setBoard(chess.board());
        setTurn(chess.turn());

        if(chess.isGameOver())
        {
          setOpenGameOverPopup(true)
        }
      }  
    }catch(err)
    {
      
      showErrorMessage("Invalid Move");
    }
  }

        
    const ranks= ["8" , "7" , "6" , "5" , "4" , "3" , "2" , "1"];

    return(
        <div ref={drop as any} className="h-[640px] w-[640px]  bg-amber-50 flex flex-col">
            {
                ranks.map((rank , index) =>
                {
                    return(
                       <Row rank={rank} rankIndex = {index} key={rank} movePiece={movePiece}/>
                    )
                })
            }
            <GameOverPopup isOpen={openGameOver} onClose={() => {}} winner="white"/>
        </div>
    )
}







