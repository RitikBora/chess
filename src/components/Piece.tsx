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

  movePiece?: (newPosition: string, pieceId: string) => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
  type: "piece", // The type of the draggable item
  item: { id: `${color}${type}`, position }, // Include current position of the piece
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult<{ position: string }>();
    if (item && dropResult) {
      console.log(item);
      console.log(dropResult);
      // movePiece?.(dropResult.position, item.id);
    }
  },
  collect: (monitor) => ({
    isDragging: !!monitor.isDragging(),
  }),
}));


  return (
    <div ref={drag as any} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Image
        src={`/images/Chess_${type}${color}45.svg`}
        alt={`${color} ${type}`}
        width={70}
        height={70}
      />
    </div>
  );
};
