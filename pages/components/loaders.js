import { PathnameHeaading } from "@/Components/Heading";
import { Asidebar } from ".";

export default function(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <div className="w-full p-5">
            <PathnameHeaading/>
        </div>
    </main>
}