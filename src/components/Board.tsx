"use client"

import { useRecoilState } from "recoil";
import { Grid } from "./Grid";

export const Board = () =>
{
 
    
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

