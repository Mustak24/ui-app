import { PathnameHeaading } from "@/Components/Heading";
import { UnderlineBox } from "@/Components/Smallcss";
import Link from "next/link";
import { TypingHeading } from "@/Components/Heading";
import ComponentCard from "@/Components/ComponentCard";
import * as inputs from '@/Components/Input';
import * as buttons from '@/Components/Button';


export default function Index(){
    return (<div className="flex relative w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Browse all" sec="Open-Source UI elements made with CSS or Tailwind."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">

                {
                    [...(Object.entries(inputs)), ...(Object.entries(buttons))].map(info => {
                        let name = info[0];
                        let Component = info[1];
                        return <ComponentCard key={name} name={name}>
                            <Component/>
                        </ComponentCard>
                    })
                }

            </div>
        </Main>
    </div>)
}

export function Asidebar(){
    return<>
    <aside className="flex top-0 w-[200px] flex-col h-full shadow-[0_0_1px_var(--textSec)] p-10 gap-4 box-border max-md:hidden">
            <div className="font-semibold brightness-200 text-ld">Components</div>
            <div className="flex flex-col text-[var(--textSec)] text-sm gap-2">
                <Link href={'/components/buttons'}>
                    <UnderlineBox innerText="Buttons" className='pl-0 cursor-pointer' />
                </Link>
                <Link href={'/components/popovers'}>
                    <UnderlineBox innerText="Popover" className='pl-0 cursor-pointer' />
                </Link>
                <Link href={'/components/cards'}>
                    <UnderlineBox innerText="Cards" className='pl-0 cursor-pointer' />
                </Link>
                <Link href={'/components/alerts'}>
                    <UnderlineBox innerText="Alerts" className='pl-0 cursor-pointer' />
                </Link>
                <Link href={'/components/inputs'}>
                    <UnderlineBox innerText="Inputs" className='pl-0 cursor-pointer' />
                </Link>
                <Link href={'/components/loaders'}>
                    <UnderlineBox innerText="Loaders" className='pl-0 cursor-pointer' />
                </Link>
            </div>
        </aside>
    </>
}

export function Main({children, className=''}){
    return <main className={`${className} w-full p-5 max-sm:px-2 overflow-x-hidden overflow-y-scroll`}>
        <PathnameHeaading/>
        {children}
    </main>
}

export function MainHeading({className='', pri='', sec=''}){
    return <>
        <div className={className}>
            <TypingHeading className="font-semibold text-2xl">{pri}</TypingHeading>
            <TypingHeading speed={40} className="text-[var(--textSec)] text-[13px] font-sans">{sec}</TypingHeading>
        </div>
    </>
}