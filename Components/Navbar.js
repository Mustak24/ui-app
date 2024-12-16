import Link from "next/link"
import { useState } from "react";
import { NormalBtn } from "./Button";
import themeChange from "@/Functions/themeChange";
import { UnderlineBox, Navicon, HoverBox } from "./Smallcss"
import { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { TbBrandHeadlessui } from "react-icons/tb";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import {Popover, PopoverOnHover} from "./Popover";



const navigation = {
    'user': [
        {title: 'Docs', href: '/docs'},
        {title: 'Components', href: '/components'},
        {title: 'Themes', href: '/themes'},
        {title: 'Colors', href: '/colors'},
    ],
    'mobile-user': [
        {title: 'Docs', href: '/docs'},
        {title: 'Themes', href: '/themes'},
        {title: 'Colors', href: '/colors'},
        {title: 'Components', href: '/components'},
        {title: 'Inputs', href: '/components/inputs'},
        {title: 'Buttons', href: '/components/buttons'},
        {title: 'Cards', href: '/components/cards'},
        {title: 'Loaders', href: '/components/loaders'},
        {title: 'Popovers', href: '/components/popovers'},
    ]
}

export default function Navabar({
    darkMode=true, 
    navigator='user', 
    title='Ui-App', 
    logo=<TbBrandHeadlessui className="size-full" />
}){

    const [isDarkMode, setDarkMode] = useState(darkMode)
    const [isNavOpen, setNavOpen] = useState(false)

    function handleDarkMode(){
        themeChange(!isDarkMode);
        setDarkMode(!isDarkMode);
    }

    useEffect(() => {
        setDarkMode(window.matchMedia('(prefer-color-schema: dark)').matches)
    }, [])

    return <div className="fixed shrink-0 z-[500] top-0 w-full flex items-center justify-between px-5 min-h-16 font-sans text-sm shadow-[0_0_1px] backdrop-blur-md" style={{background: !isDarkMode ? 'rgb(0,0,0,.7)' : 'rgb(255,255,255,.7)'}}>
        <div>
            {/* For Pc */}
            <div className="flex items-center gap-5 max-sm:hidden">
                <Link href={'/'} className="font-bold text-mg flex items-center gap-2 opacity-90 active:opacity-100 md:hover:opacity-100 transition-all cursor-pointer">
                    <div className="size-6 flex items-center justify-center"> {logo} </div>
                    <div className="pb-[1px] max-md:hidden">{title}</div>
                </Link>
                <div className="flex gap-2 font-semibold">
                    {navigation[navigator].map((element, index) => (<Link key={index} href={element.href} className="opacity-70 hover:opacity-100">
                        <UnderlineBox innerText={element.title} />
                    </Link>))}
                </div>
            </div>
            {/* For Mobile */}
            <button onClick={()=>setNavOpen(!isNavOpen)}  className="sm:hidden"><Navicon/></button>  

            <div className="flex items-end bg-[rgb(0,0,0,.7)] z-[-1] justify-center w-[100vw] h-[100vh] fixed left-0 transition-all duration-300 origin-center"
                style={{
                    opacity: isNavOpen ? '1' : '0',
                    visibility: isNavOpen ? 'visible' : 'hidden',
                    top: isNavOpen ? '0vh' : '100vh',
                }}
            >
                <div onClick={()=>setNavOpen(false)} className="relative flex flex-col bg-[var(--bg)] items-start gap-3 w-full h-[70vh] rounded-lg border-[1px] border-[var(--bgSec)] after:content-[''] after:absolute after:top-3 after:w-[100px] after:border-2 after:border-[var(--bgSec)] after:self-center after:rounded-full pt-5 px-5">
                {navigation[`mobile-${navigator}`].map((element, index) => (<Link key={index} href={element.href} className="opacity-70 hover:opacity-100 font-semibold w-full">
                        <UnderlineBox className='' innerText={element.title} />
                    </Link>))}
                </div>
            </div>
        </div>
        
        <div className="flex gap-2">
            <NormalBtn className="max-sm:hidden"><span className="text-nowrap text-clip">Search Documentation ...</span></NormalBtn>
            <button><HoverBox className="sm:hidden"><IoSearchSharp className="size-full" /></HoverBox></button>

            <Link href={'https://github.com/Mustak24/ui-app'} target="_black">
                <PopoverOnHover className="flex items-center justify-center">
                    <HoverBox><IoLogoGithub className="size-full" /></HoverBox>
                    <Popover className='top-full translate-y-1 bg-[var(--bgSec)] px-2 rounded-lg py-2 w-20 text-center'>Git-Hub</Popover>
                </PopoverOnHover>
            </Link> 

            {darkMode && <div onClick={handleDarkMode}>
            <PopoverOnHover>
                <HoverBox>
                    {isDarkMode ? <MdOutlineLightMode className="size-full" /> : <MdOutlineDarkMode className="size-full" />}
                </HoverBox>
                <Popover className='right-0 translate-y-1 top-full bg-[var(--bgSec)] text-center w-24 h-fit rounded-lg py-2'>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Popover>
            </PopoverOnHover>
            </div>}

        </div>
    </div>
}