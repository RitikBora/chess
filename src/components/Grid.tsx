"use client"

import { BoardAtom, selectedGridAtom } from "@/recoil/atom";
import { Color, PieceSymbol, Square } from "chess.js";
import Image from "next/image";
import { useEffect, useState } from "react";

import {useRecoilState, useRecoilValue } from "recoil";

type GridDetails = {
    square : Square,
    type : PieceSymbol,
    color : Color
} | null | undefined

export const Grid = ({rank , file , fileIndex  , rankIndex} : {rank : string , file : string , fileIndex : number , rankIndex : number}) =>
{
    const [selectedGrid , setSelectedGrid] = useRecoilState(selectedGridAtom);
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
        if(gridDetails)
        {
            console.log(gridDetails);
        }
    } , [gridDetails])

    const registerClick = () =>
    {
        let selected = true;
        if(file == selectedGrid.file && rank == selectedGrid.rank) //second click on same grid
        {
            selected = !selectedGrid.isSelected
        }
        setSelectedGrid({
            file : file,
            rank : rank,
            isSelected: selected
        })
    }
    return(
        <div  className={`h-[80px] w-[80px] flex justify-center items-center relative cursor-pointer ${
          selectedGrid.file == file && selectedGrid.rank == rank  && selectedGrid.isSelected
          ? "bg-red-200"
          : (fileIndex + Number(rank)) % 2
          ? "bg-green-200"
          : ""
      }`} onClick={registerClick} key={rank + file}>
            <div className={`absolute top-1 left-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {file== "a"  && rank}
            </div>
           {
            gridDetails && <div>
                <Image
                    src={`/images/Chess_${gridDetails.type}${gridDetails.color}45.svg`}
                    alt={`${gridDetails.color} ${gridDetails.type}`}
                    width={70}
                    height={70}
                />
            </div>
           }
            <div className={`absolute bottom-0.5 right-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {rank=="1" && file}
            </div>
        </div>
    )
}