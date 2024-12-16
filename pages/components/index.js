import { PathnameHeaading } from "@/Components/Heading";
import { UnderlineBox } from "@/Components/Smallcss";
import Link from "next/link";
import { TypingHeading } from "@/Components/Heading";
import { Button, ClassicButton01, LongWidthBnt, NormalBtn, RoundButton } from "@/Components/Button";
import { ClassicInput, DefaultTextarea, Input, Input01, Textarea } from "@/Components/Input";
import ComponentCard from "@/Components/ComponentCard";


export default function Index(){
    return (<div className="flex relative w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Browse all" sec="Open-Source UI elements made with CSS or Tailwind."/> 
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
                <ComponentCard name="Dynamic Rounded Button">
                    <Button scale={70}>Hove Me</Button>
                </ComponentCard>
            
                <ComponentCard name="Normal Button" >
                    <NormalBtn>Hove Me</NormalBtn>
                </ComponentCard>

                <ComponentCard name="Normal input-password">
                    <Input type='password'/>
                </ComponentCard>

                <ComponentCard name="Textarea">
                    <Textarea/>
                </ComponentCard>

                <ComponentCard name="Circular Button" >
                    <RoundButton>Click</RoundButton>
                </ComponentCard>

                <ComponentCard name="Dynamic Long width Button">
                    <LongWidthBnt>Hove Me</LongWidthBnt>
                </ComponentCard>

                <ComponentCard name="Input">
                    <Input01/>
                </ComponentCard>

                <ComponentCard name="Dynamic Button">
                    <ClassicButton01>Hove Me</ClassicButton01>
                </ComponentCard>

                <ComponentCard name="Textarea default">
                    <DefaultTextarea/>
                </ComponentCard>

                <ComponentCard name="Normal input-text">
                    <Input/>
                </ComponentCard>

                <ComponentCard name="Dynamic animate-input-text">
                    <ClassicInput/>
                </ComponentCard>

                <ComponentCard name="Dynamic animate-input-password ">
                    <ClassicInput type='password'/>
                </ComponentCard>
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