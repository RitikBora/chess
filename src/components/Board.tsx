"use client"

import { useSetRecoilState } from "recoil";
import { Grid } from "./Grid";
import { Chess } from 'chess.js';
import { useEffect } from "react";
import { BoardAtom } from "@/recoil/atom";
import { useDrop } from "react-dnd";



export const Board = () =>
{
    const setBoard = useSetRecoilState(BoardAtom);
    const chess = new Chess();
    const board = chess.board();

    useEffect(() => 
    {
        
        setBoard(board);
    })
    
const [{ isOver }, drop] = useDrop(() => ({
  accept: "piece", 
  drop: (item: { id: string; position: string }, monitor) => {
    const dropTarget = monitor.getClientOffset(); 
    
     const dropElement = document.elementFromPoint(
      dropTarget?.x || 0,
      dropTarget?.y || 0
    ); // Get the DOM element at the drop position

    const key = dropElement?.getAttribute("data-key");
 
    const dropPosition = key;
  
    return { position: dropPosition }; 
  },
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  }),
}));


    
    
    const ranks= ["8" , "7" , "6" , "5" , "4" , "3" , "2" , "1"];



    return(
        <div ref={drop as any} className="h-[640px] w-[640px]  bg-amber-50 flex flex-col">
            {
                ranks.map((rank , index) =>
                {
                    return(
                       <Row rank={rank} rankIndex = {index} key={rank}  />
                    )
                })
            }
        </div>
    )
}



const Row = ({rank , rankIndex} : {rank : string , rankIndex : number}) =>{
    const files= ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];

    
    return(
        <div className="h-[80px] w-[640px] flex">
           {
                files.map((file , index) => 
                {
                    return(
                        <Grid file={file} fileIndex={index} rankIndex={rankIndex} rank={rank} key={file + index}/>
                    )
                })
           }
        </div>
    )
}



