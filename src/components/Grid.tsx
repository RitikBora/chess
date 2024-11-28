"use client"

import { selectedGridAtom } from "@/recoil/atom";
import { useEffect, useState } from "react";
import { constSelector, useRecoilState } from "recoil";

export const Grid = ({rank , file ,fileIndex} : {rank : string , file : string , fileIndex : number}) =>
{
    const [selectedGrid , setSelectedGrid] = useRecoilState(selectedGridAtom);

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
        <div  className={`h-[80px] w-[80px] flex flex-col relative cursor-pointer ${
          selectedGrid.file == file && selectedGrid.rank == rank  && selectedGrid.isSelected
          ? "bg-red-200"
          : (fileIndex + Number(rank)) % 2
          ? "bg-green-200"
          : ""
      }`} onClick={registerClick} key={rank + file}>
            <div className={`absolute top-1 left-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {file== "a"  && rank}
            </div>
            <div className={`absolute bottom-0.5 right-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {rank=="1" && file}
            </div>
        </div>
    )
}