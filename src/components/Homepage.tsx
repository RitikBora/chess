
import { Carousel } from "./Carousel"

export const HomePage =  () =>
{
    return(
        <div className="flex flex-col gap-20 mt-20">
            <div className="flex  justify-center  text-6xl text-amber-50 font-bold">
                Chess Mates
            </div>
            <Carousel/>
        </div>
    )
}

