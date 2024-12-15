import { capitalize } from "@/Functions/helper";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export function TypingHeading({className='', speed=100, children}){
    return <>
        <style jsx>{`
            @keyframes animation-0-to-1-opacity-scale{
              0%{opacity: 0; scale: 0;}
              100%{opacity: 1; scale: 1;}
            }
        `}</style>
        <div className={`${className}`}>
            {(String(children)).split('').map((char, index) => <span key={index} className="opacity-0 scale-0 transition-all" style={{
                animation: 'animation-0-to-1-opacity-scale 100ms forwards',
                animationDelay: `${index*speed}ms`
            }}>{char}</span>)}
        </div>
    </> 
}

export function PathnameHeaading({className}){
    const [path, setPath] = useState([])
    useEffect(() => setPath(window.location.pathname.split('/').slice(1)), [])
    return <>
    <div className={className}>
        <div className="flex gap-1 items-center h-6 text-[14px]">
            {path.map((e, i) => <div key={i} className="flex items-center gap-1" >
                <span className="brightness-75" style={{display: i?'block':'none'}}><FaAngleRight /></span>
                <span style={{filter: `brightness(${i!=path.length-1 ? '.7' : '2'})`}}>{capitalize(e)}</span>
            </div>)}
        </div>
    </div>
    </>
}