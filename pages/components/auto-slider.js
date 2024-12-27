import ComponentCard from "@/Components/ComponentCard";
import { Main, MainHeading } from ".";
import { Asidebar } from ".";
import AutoSlider, { Card } from "@/Components/AutoSlider";

export default function Cards(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Auto Slider" sec="Displays a card with animate auto-slider."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
                <ComponentCard name="Auto Slider">
                    <div className={'rounded-lg w-full overflow-hidden flex items-center justify-center bg-[var(--bgSec)]'}>
                        <AutoSlider>
                            <Card className={'py-10 text-center text-3xl'}>01</Card>
                            <Card className={'py-10 text-center text-3xl'}>02</Card>
                            <Card className={'py-10 text-center text-3xl'}>03</Card>
                            <Card className={'py-10 text-center text-3xl'}>04</Card>
                        </AutoSlider>
                    </div>
                </ComponentCard>
            </div>     
        </Main>
    </main>
}