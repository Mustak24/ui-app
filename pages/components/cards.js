import { Main, MainHeading } from ".";
import { Asidebar } from ".";

export default function(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Cards" sec="Displays a card with header, content, and footer."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">

            </div>     
        </Main>
    </main>
}