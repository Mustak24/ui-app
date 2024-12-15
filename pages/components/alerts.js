import { Main, MainHeading } from ".";
import { Asidebar } from ".";

export default function(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Alerts" sec="Displays a card with header, content, and footer."/> 
            <div className="flex flex-wrap justify-stretch gap-5">

            </div>     
        </Main>
    </main>
}