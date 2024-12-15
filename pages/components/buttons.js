
import { Asidebar, Main, MainHeading } from ".";
import { Button, ClassicButton01, LongWidthBnt, NormalBtn, RoundButton } from "@/Components/Button";
import ComponentCard from "@/Components/ComponentCard";

export default function(){
    return <div className="flex relative w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Buttons" sec="Displays a button or a component that looks like a button."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">

                <ComponentCard name="Dynamic Rounded Button">
                    <Button scale={70}>Hove Me</Button>
                </ComponentCard>
            
                <ComponentCard name="Normal Button" >
                    <NormalBtn>Hove Me</NormalBtn>
                </ComponentCard>

                <ComponentCard name="Circular Button" >
                    <RoundButton>Click</RoundButton>
                </ComponentCard>

                <ComponentCard name="Dynamic Long width Button">
                    <LongWidthBnt>Hove Me</LongWidthBnt>
                </ComponentCard>

                <ComponentCard name="Dynamic Button">
                    <ClassicButton01>Hove Me</ClassicButton01>
                </ComponentCard>
            </div>     
        </Main>
    </div>
}

