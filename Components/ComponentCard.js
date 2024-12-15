import { useState } from "react"
import { UnderlineBox } from "./Smallcss"

export default function({children, code='Soon', name=''}){

    const [optionIsCode, setOptionIsCode] = useState(false)

    return <>
    <div className="py-10 min-w-[500px] flex-1">
        <div className="flex items-center gap-5 my-[2px]">
            <button onClick={()=>setOptionIsCode(false)} ><UnderlineBox innerText="Preview" /></button>
            <button onClick={()=>setOptionIsCode(true)} ><UnderlineBox innerText="Code" /></button>
        </div>
        <hr className="borde-2 border-[var(--text)] opacity-20 mb-5"/>
        <div className="flex items-center justify-center relative h-[400px]">
            <div className="p-10 flex items-center justify-center relative w-full h-full shadow-[0_0_1px_var(--text)] box-border my-5 rounded-lg"
                style={{
                    opacity: !optionIsCode ? '1' : '0',
                    scale: !optionIsCode ? '1' : '.5',
                    visibility: !optionIsCode ? 'visible' : 'hidden',
                    transition: 'all .5s'
                }}
                >
                <h1 className="font-lg font-semibold absolute top-2 left-2 shadow-[0_0_1px_var(--text)] px-2 py-1 rounded-md">{name}</h1>
                {children} 
            </div>
            <pre className="absolute w-full h-full shadow-[0_0_1px_var(--text)] box-border my-5 rounded-lg text-pretty p-2 overflow-scroll"
                style={{
                    opacity: optionIsCode ? '1' : '0',
                    scale: optionIsCode ? '1' : '.5',
                    visibility: optionIsCode ? 'visible' : 'hidden',
                    transition: 'all .5s'
                }}
                >
                <code>
                    {code}
                </code>
            </pre>
        </div>
    </div>
    </>
}