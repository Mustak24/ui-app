
import { Asidebar, Main, MainHeading } from ".";
import ComponentCard from "@/Components/ComponentCard";

import * as Btns from '@/Components/Button';


export default function Buttons(){
    return <div className="flex relative w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Buttons" sec="Displays a button or a component that looks like a button."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
                {
                    Object.entries(Btns).map(info =>{
                        let name = info[0];
                        let Button = info[1];
                        return <ComponentCard key={name} name={name}>
                            <Button/>
                        </ComponentCard>
                    })
                }
            </div>     
        </Main>
    </div>
}

