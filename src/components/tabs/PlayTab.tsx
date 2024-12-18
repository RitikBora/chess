"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import {CircuitBoardIcon , PuzzleIcon} from 'lucide-react'


export const PlayTab = () =>
{
    return(
        <div className="flex gap-4 w-full  mt-4">
            <StartGameCard/>
            <JoinGameCard/>
        </div>
    )
}

const StartGameCard = () =>
{
    return(
       <div className="w-1/2  ">
            <Card className="bg-amber-50">
                <CardHeader>
                    <CardTitle className="text-2xl">Start a New Game</CardTitle>
                    <CardDescription>Create a new room and invite a friend to play.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center mb-4">
                  <CircuitBoardIcon className="w-24 h-24 text-lime-600" />
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="default" className="text-lg bg-lime-600 w-full font-bold text-amber-50 hover:bg-lime-700" onClick={() => {}}>Start Game</Button>
                </CardFooter> 
            </Card>
       </div>
    )
}

const JoinGameCard = () =>
{
    return(
        <div className="w-1/2 ">
            <Card className="bg-lime-600">
                <CardHeader>
                    <CardTitle className="text-amber-50 text-2xl">Join Existing Game</CardTitle>
                    <CardDescription className="text-amber-100">Enter a room link to join an ongoing game.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center mb-4">
                        <PuzzleIcon className="w-24 h-24 text-amber-50" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="default" className="text-lg bg-amber-50 w-full font-bold text-lime-600 hover:bg-amber-100" onClick={() => {}}>Join Game</Button>
                </CardFooter> 
            </Card>
        </div>
    )
}