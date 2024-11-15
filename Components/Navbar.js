import Link from "next/link"
import { useState } from "react";
import { NormalBtn } from "./Button";
import themeChange from "@/Functions/themeChange";
import { UnderlineBox, Navicon, HoverBox } from "./Smallcss"

import { IoLogoGithub } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { TbBrandHeadlessui } from "react-icons/tb";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";



const navigation = {
    'user': [
        {title: 'Docs', href: '/docs'},
        {title: 'Components', href: '/docs'},
        {title: 'Themes', href: '/themes'},
        {title: 'Colors', href: '/colors'},
    ]
}

export default function Navabr({navigator='user', title='App / Ui', logo=<TbBrandHeadlessui className="size-full" />}){

    const [isDarkMode, setDarkMode] = useState(true)

    function handleDarkMode(){
        themeChange(isDarkMode);
        setDarkMode(!isDarkMode);
    }

    return <div className="sticky z-[100] top-0 w-full flex items-center justify-between px-5 h-16 font-sans text-sm shadow-[0_0_1px] backdrop-blur-md bg-transparent">
        <div>
            {/* For Pc */}
            <div className="flex items-center gap-5 max-sm:hidden">
                <div className="font-bold text-mg flex items-center gap-2 opacity-90 active:opacity-100 md:hover:opacity-100 transition-all cursor-pointer">
                    <div className="size-6 flex items-center justify-center"> {logo} </div>
                    <div className="pb-[1px] max-md:hidden">{title}</div>
                </div>
                <div className="flex gap-2 font-semibold">
                    {navigation[navigator].map((element, index) => (<Link key={index} href={element.href} className="opacity-70 hover:opacity-100">
                        <UnderlineBox innerText={element.title} />
                    </Link>))}
                </div>
            </div>
            {/* For Mobile */}
            <div className="sm:hidden"><Navicon/></div>
        </div>
        
        <div className="flex gap-2">
            <NormalBtn className="max-sm:hidden"><span className="text-nowrap text-clip">Search Documentation ...</span></NormalBtn>
            <button><HoverBox className="sm:hidden"><IoSearchSharp className="size-full" /></HoverBox></button>
            <HoverBox><IoLogoGithub className="size-full" /></HoverBox>
            <button onClick={handleDarkMode}>
                <HoverBox>
                    {isDarkMode ? <MdOutlineLightMode className="size-full" /> : <MdOutlineDarkMode className="size-full" />}
                </HoverBox>
            </button>
        </div>
    </div>
}


