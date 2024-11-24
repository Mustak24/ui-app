import { PathnameHeaading, TypingHeading } from "@/Components/Heading";
import { Asidebar, Main, MainHeading } from ".";
import { Button, NormalBtn } from "@/Components/Button";
import { UnderlineBox } from "@/Components/Smallcss";
import { useState } from "react";

export default function(){
    return <div className="flex relative w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading className="my-5" pri="Buttons" sec="Displays a button or a component that looks like a button."/> 
            <div className="flex flex-col gap-5">

                <ButtonCard 
                    name="Dynamic Round Button"
                    preview={
                        <Button text="crimson" bg="white" scale={70}>Hove Me</Button>
                    }
                >
                    Code
                </ButtonCard>

                <ButtonCard 
                    name="Normal Button"
                    preview={<NormalBtn text="crimson" bg="white">Hove Me</NormalBtn>}
                >
                    Code
                </ButtonCard>

            </div>     
        </Main>
    </div>
}


function ButtonCard({children, name='', preview=''}){

    const [optionIsCode, setOptionIsCode] = useState(false)

    return <>
    <div className="py-10">
        <div className="flex items-center gap-5 my-[2px]">
            <button onClick={()=>setOptionIsCode(false)} ><UnderlineBox innerText="Preview" /></button>
            <button onClick={()=>setOptionIsCode(true)} ><UnderlineBox innerText="Code" /></button>
        </div>
        <hr className="borde-2 border-[var(--text)] opacity-20"/>
        <div className="flex items-center justify-center relative">
            <div className="flex items-center justify-center relative w-full shadow-[0_0_1px_var(--text)] box-border my-5 h-[400px] rounded-lg"
                style={{
                    opacity: !optionIsCode ? '1' : '0',
                    scale: !optionIsCode ? '1' : '.5',
                    visibility: !optionIsCode ? 'visible' : 'hidden',
                    transition: 'all .5s'
                }}
                >
                <h1 className="font-lg font-semibold absolute top-2 left-2 shadow-[0_0_1px_var(--text)] px-2 py-1 rounded-md">{name}</h1>
                {preview} 
            </div>
            <pre className="absolute w-full shadow-[0_0_1px_var(--text)] box-border my-5 h-[400px] rounded-lg text-pretty p-2"
                style={{
                    opacity: optionIsCode ? '1' : '0',
                    scale: optionIsCode ? '1' : '.5',
                    visibility: optionIsCode ? 'visible' : 'hidden',
                    transition: 'all .5s'
                }}
                >
                <code>
                    {children}
                </code>
            </pre>
        </div>
    </div>
    </>
}
