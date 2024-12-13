"use client"

import { useSetRecoilState } from "recoil";
import { Grid } from "./Grid";
import { Chess } from 'chess.js';
import { useEffect } from "react";

import { useDrop } from "react-dnd";
import { ChessAtom } from "@/recoil/atom";



export const Board = () =>
{
    const setChess = useSetRecoilState(ChessAtom);  
    useEffect(() => 
    {
   
        const chess = new Chess();
        setChess(chess);
    } , []);

   
    
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


    
    
    const ranks= ["8" , "7" , "6" , "5" , "4" , "3" , "2" , "1"];



    return(
        <div ref={drop as any} className="h-[640px] w-[640px]  bg-amber-50 flex flex-col">
            {
                ranks.map((rank , index) =>
                {
                    return(
                       <Row rank={rank} rankIndex = {index} key={rank} />
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



