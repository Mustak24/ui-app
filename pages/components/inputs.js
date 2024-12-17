
import { Asidebar, Main, MainHeading } from ".";
import ComponentCard from "@/Components/ComponentCard";
import * as Ints from '@/Components/Input';

export default function Inputs(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading
                pri="Input"
                sec="Displays a form input field or a component that looks like an input field."
            />

            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
                {
                    Object.entries(Ints).map(info => {
                        let name = info[0];
                        let Input = info[1];
                        return <ComponentCard key={name} name={name}>
                            <Input/>
                        </ComponentCard>
                    })
                }
            </div>
        </Main>
    </main>
}