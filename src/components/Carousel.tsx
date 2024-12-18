import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LearnTab } from "./tabs/LearnTab"


export const Carousel = () =>
{
    return(
        <div className="flex justify-center ">
            <Tabs defaultValue="play" className=" w-2/3">
                <TabsList className="flex justify-between bg-stone-700 text-amber-50">
                    <TabsTrigger className="w-1/2 data-[state=active]:bg-lime-600" value="play">Play</TabsTrigger>
                    <TabsTrigger className="w-1/2  data-[state=active]:bg-lime-600" value="learn">Learn</TabsTrigger>
                </TabsList>
                <TabsContent value="play">Make changes to your account here.</TabsContent>
                <TabsContent value="learn">
                    <LearnTab/>
                </TabsContent>
            </Tabs>
        </div>
    )
}


