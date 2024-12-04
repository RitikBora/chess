"use client"

import { BoardAtom} from "@/recoil/atom";
import { Color, PieceSymbol, Square } from "chess.js";

import { useEffect, useState } from "react";

import {useRecoilValue } from "recoil";
import { Piece } from "./Piece";

type GridDetails = {
    square : Square,
    type : PieceSymbol,
    color : Color
} | null | undefined


export const Grid = ({rank , file , fileIndex  , rankIndex} : {rank : string , file : string , fileIndex : number , rankIndex : number}) =>
{
    const board = useRecoilValue(BoardAtom);
    const [gridDetails , setGridDetails] = useState<GridDetails>(null);
    

    useEffect(() =>
    {      
        if(board && board.at(rankIndex)?.at(fileIndex))
        {
            setGridDetails(board[rankIndex][fileIndex]);
        }
    } , [board]);

    useEffect(() => {
       
    } , [gridDetails])

    
    return(
        <div  className={`h-[80px] w-[80px] flex justify-center items-center relative cursor-pointer ${
           (fileIndex + Number(rank)) % 2
          ? "bg-green-200"
          : ""
      }`} onClick={() =>{}} key={file + rank} data-key={file+rank}>
            <div className={`absolute top-1 left-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {file== "a"  && rank}
            </div>
            {
                gridDetails && <Piece position={gridDetails.square} color={gridDetails.color} type ={gridDetails.type}/>
            }
            <div className={`absolute bottom-0.5 right-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {rank=="1" && file}
            </div>
        </div>
    )
}


