"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FaRegChessBishop as Bishop , FaRegChessKnight as Knight , FaRegChessRook as Rook , FaRegChessPawn as Pawn
, FaRegChessKing  as King} from "react-icons/fa6";

import {   CrownIcon as Queen  } from 'lucide-react'
import { Button } from "../ui/button";
export const LearnTab = () =>
{
    const handleRedirect = () =>
    {
        window.location.href = "https://www.chess.com/learn"
    }
    return(
        <Card className="w-full mt-4 bg-stone-600">
            <CardHeader>
                <CardTitle className="text-white text-2xl">Learn Chess</CardTitle>
                <CardDescription className="text-amber-100">Improve your skills with our learning resources.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {[King, Queen, Rook, Bishop, Knight, Pawn].map((PieceIcon, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <PieceIcon className="w-12 h-12 text-amber-50 mb-2" />
                        
                    </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="default" className="text-lg bg-lime-600 w-full font-bold text-amber-50 hover:bg-lime-700" onClick={handleRedirect}>Start Learning</Button>
            </CardFooter> 
        </Card>
    )
}
