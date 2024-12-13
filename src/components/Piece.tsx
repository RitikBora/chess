import { useDrag } from "react-dnd";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { ChessAtom } from "@/recoil/atom";



export const Piece = ({
  position,
  color,
  type,
}: {
  position: string;
  color: string;
  type: string;
  
}) => {
  const chess = useRecoilValue(ChessAtom);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id: `${color}${type}`, position },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ position: string }>();
      if (item && dropResult) {
        movePiece(position , dropResult.position);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));



  const movePiece = (from : string , to : string) =>
  {
    const board = chess?.board();
    if(board )
    {
     const [fromFile , fromRank] = from.split("");
     const fromDetails = fetchBoardIndexes(from);
     const toDetails = fetchBoardIndexes(to);

     //Is Piece already present on to index

     console.log(board[toDetails.rankIndex][toDetails.fileIndex]);
    }
      
  }

  const fetchBoardIndexes = (position : string) =>
  {
    const [file , rank] = position.split("");
    const fileIndex = file.charCodeAt(0) - 97; 
    const rankIndex = 8 - parseInt(rank, 10);
    return {fileIndex , rankIndex};
  }

  return (
    <div
      ref={drag as any}
      style={{
        opacity: isDragging ? 0 : 1,
       
        transform: isDragging ? "scale(0.7)" : "scale(1)", 
      }}
    >
      <Image
        src={`/images/Chess_${type}${color}45.svg`}
        alt={`${color} ${type}`}
        width={70}
        height={70}
        style={{
          display: "block", 
        }}
      />
    </div>
  );
};
