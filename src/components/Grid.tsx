"use client"

import { selectedGridAtom } from "@/recoil/atom";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const Grid = ({rank , file ,fileIndex} : {rank : string , file : string , fileIndex : number}) =>
{
    const [selectedGrid , setSelectedGrid] = useRecoilState(selectedGridAtom);

    const registerClick = () =>
    {
        // setSelectedGrid({
        //     file : file,
        //     rank : rank
        // })
    }
    return(
        <div  className={`h-[80px] w-[80px] flex flex-col relative cursor-pointer ${
          false  
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