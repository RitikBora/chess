"use client"

import { useRecoilState } from "recoil";
import { Grid } from "./Grid";
import { Chess } from 'chess.js';
import { useEffect, useState } from "react";

import { useDrop } from "react-dnd";
import { BoardAtom} from "@/recoil/atom";




export const Board = () =>
{
    
    
     const [chess , setChess] = useState<Chess|null>(null);
     const [board , setBoard] = useRecoilState(BoardAtom);
    
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
      }  
    }catch(err)
    {
      console.log(err);
    }
  }

    const fetchBoardIndexes = (position : string) =>
  {
    const [file , rank] = position.split("");
    const fileIndex = file.charCodeAt(0) - 97; 
    const rankIndex = 8 - parseInt(rank, 10);
    return {fileIndex , rankIndex};
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
        </div>
    )
}



const Row = ({rank , rankIndex , movePiece} : {rank : string , rankIndex : number, movePiece: (from : string , to : string) => void}) =>{
    const files= ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];

    
    return(
        <div className="h-[80px] w-[640px] flex">
           {
                files.map((file , index) => 
                {
                    return(
                        <Grid file={file} fileIndex={index} rankIndex={rankIndex} rank={rank} key={file + index} movePiece={movePiece}/>
                    )
                })
           }
        </div>
    )
}



