import { Main, MainHeading } from ".";
import { Asidebar } from ".";

export default function Loaders(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Loader" sec="Displays a Loader for user, with animations"/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">

            </div>     
        </Main>
    </main>
}