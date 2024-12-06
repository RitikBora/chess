import { useDrag } from "react-dnd";
import Image from "next/image";
import React from "react";

export const Piece = ({
  position,
  color,
  type,
  movePiece, // Function to update the position when the piece is dropped
}: {
  position: string;
  color: string;
  type: string;
  movePiece?: (startPosition: string , newPosition: string, pieceId: string) => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id: `${color}${type}`, position },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ position: string }>();
      if (item && dropResult) {
        movePiece?.(position , dropResult.position, item.id);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
