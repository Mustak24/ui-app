import { Main, MainHeading } from ".";
import { Asidebar } from ".";

export default function Popovers(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Popover" sec="Displays rich content in a portal, triggered by a button."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">

            </div>     
        </Main>
    </main>
}