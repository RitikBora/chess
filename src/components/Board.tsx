"use client"

import { tempAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export const Board = () =>
{
    const [temp , setTemp] = useRecoilState(tempAtom);
    
    const ranks= ["8" , "7" , "6" , "5" , "4" , "3" , "2" , "1"];



    return(
        <div className="h-[640px] w-[640px]  bg-amber-50 flex flex-col">
            {
                ranks.map(rank =>
                {
                    return(
                       <Row rank={rank} key={rank}/>
                    )
                })
            }
        </div>
    )
}



const Row = ({rank} : {rank : string}) =>{
    const files= ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    return(
        <div className="h-[80px] w-[640px] flex">
           {
                files.map((file , index) => 
                {
                    return(
                        <Grid file={file} fileIndex={index} rank={rank} key={file + index}/>
                    )
                })
           }
        </div>
    )
}

const Grid = ({rank , file ,fileIndex} : {rank : string , file : string , fileIndex : number}) =>
{
    return(
        <div className={`w-[80px] ${(fileIndex + Number(rank)) % 2 && "bg-green-200"} flex flex-col relative`}>
            <div className={`absolute top-1 left-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {file== "a"  && rank}
            </div>
            <div className={`absolute bottom-0.5 right-1 ${(fileIndex + Number(rank)) % 2 ? "text-amber-50" : "text-green-500"}`}>
                {rank=="1" && file}
            </div>
        </div>
    )
}