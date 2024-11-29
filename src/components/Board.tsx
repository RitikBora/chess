"use client"

import { useSetRecoilState } from "recoil";
import { Grid } from "./Grid";
import { Chess } from 'chess.js';
import { useEffect } from "react";
import { BoardAtom } from "@/recoil/atom";



export const Board = () =>
{
    const setBoard = useSetRecoilState(BoardAtom);
    const chess = new Chess();
    const board = chess.board();

    useEffect(() => 
    {
        
        setBoard(board);
    })
    
    
    
    const ranks= ["8" , "7" , "6" , "5" , "4" , "3" , "2" , "1"];



    return(
        <div className="h-[640px] w-[640px]  bg-amber-50 flex flex-col">
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

