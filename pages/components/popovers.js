import ComponentCard from "@/Components/ComponentCard";
import { Main, MainHeading } from ".";
import { Asidebar } from ".";
import Link from "next/link";
import { Popover, PopoverOnHover } from "@/Components/Popover";
import { HoverBox } from "@/Components/Smallcss";
import { IoLogoGithub } from "react-icons/io";

export default function Popovers(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Popover" sec="Displays rich content in a portal, triggered by a button."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
                <ComponentCard name="Popver">
                    <Link href={'https://github.com/Mustak24/ui-app'} target="_black">
                        <PopoverOnHover className="flex items-center justify-center">
                            <IoLogoGithub className="size-10 bg-[var(--bgSec)] box-content p-2 rounded-lg" />
                            <Popover className='top-full translate-y-1 bg-[var(--bgSec)] px-2 rounded-lg py-2 w-20 text-center text-xs'>Git-Hub</Popover>
                        </PopoverOnHover>
                    </Link> 
                </ComponentCard>
            </div>     
        </Main>
    </main>
}