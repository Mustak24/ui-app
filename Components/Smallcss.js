export function UnderlineBox({children, innerText='Hover Me'}){
    return <div className={`relative flex items-center justify-center after:content-[''] after:absolute after:border-2 after:rounded-full after:w-0 sm:hover:after:w-full max-sm:active:after:w-full px-2 after:top-full after:opacity-0 sm:hover:after:opacity-100 max-sm:active:after:opacity-100 after:transition-all sm:duration-200`}>
        {innerText} {children}
    </div>
}

export function Navicon(){
    return <div className="relative flex z-30 flex-col items-center justify-center gap-[4px] hover:w-10 w-8 h-8 transition-all duration-300 active:w-7 opacity-70 hover:opacity-100 cursor-pointer" >
        <div className="navIcon w-[80%] left-0 absolute border-2 border-[var(--text)] items-start justify-center rounded-full after:content-[''] after:absolute after:left-0 after:border-2 after:border-[var(--text)] after:w-[60%] after:bottom-2 after:rounded-full before:content-[''] before:w-[60%] before:rounded-full before:absolute before:border-2 before:border-[var(--text)] before:right-0 before:top-2"></div>
    </div>
}

export function HoverBox({children, className=''}){
    return <div className={`${className} max-sm:active:bg-[var(--bgSec)] sm:hover:bg-[var(--bgSec)] size-9 rounded-md flex items-center justify-center relative p-2 cursor-pointer`}>
        {children}
    </div>
}

export function Box({children}){
    return <div className={`${className} bg-[var(--bgSec)] opacity-80 max-sm:active:opacity-100 sm:hover:opacity-100 size-9 rounded-md flex items-center justify-center relative p-2 cursor-pointer`}>
        {children}
    </div>
}

