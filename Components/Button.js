import { useEffect, useRef, useState } from "react"
import { TbCubeSend } from "react-icons/tb"


export function NormalBtn({children='Hover Me', className='', onClick=()=>{}}){
    return <button className={`${className} rounded-md opacity-60 hover:opacity-100 bg-[var(--bgSec)] px-4 h-9 text-sm font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer`}
        onClick={onClick}
    >
        {children}
    </button>
}


export function Button({isLoading=false, loadingInnerHTML='Wait ...', className='', text='royalblue', bg='white', children='Hover Me', onClick=()=>{}}) {

    const button = useRef(null);
    const [scale, setScale] = useState(0);

    useEffect(() => {
        if(!button.current) return;
        setScale((button.current.offsetWidth)/4);
    }, [button])

    return (
        <button ref={button}
            className={`${className} relative z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-h-10 z-1 rounded-full flex items-center justify-center flex-col text-center transition-all duration-500 text-[var(--text)] max-sm:active:text-[var(--bg)] sm:hover:text-[var(--bg)] bg-[var(--bg)] sm:hover:bg-transparent max-sm:active:bg-transparent active:after:content-[''] after:border-2 after:border-[var(--text)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] before:border-2 before:border-[var(--text)] before:rounded-full before:transition-all after:transition-all max-sm:active:before:scale-[var(--scale)] max-sm:active:after:scale-[var(--scale)] sm:hover:before:scale-[var(--scale)] sm:hover:after:scale-[var(--scale)]`}
            style={{ '--bg': bg, '--text': text, '--scale':scale }}
            onClick={onClick || function () {}}
            disabled={isLoading}
        >
            {
                isLoading ?
                    (
                        <div className="flex items-center gap-2">
                            <div className='min-w-5 aspect-square rounded-full border-[6px] animate-spin transition-all sm:duration-300 border-[var(--text)] max-sm:group-active:border-transparent sm:group-hover:border-transparent border-t-transparent max-sm:group-active:border-t-[var(--bg)] sm:group-hover:border-t-[var(--bg)]'></div>
                            <div>{loadingInnerHTML}</div>
                        </div>
                    ) : children
            }
        </button>
    )
}

export function RoundButton({className='', text='royalblue', onClick=()=>{}, children='Click'}) {

    return (
        <button
            className={`${className} relative text-[9px] font-bold font-sans cursor-pointer z-[1] transition-all duration-500 hover:text-white flex items-center justify-center size-10 overflow-hidden rounded-full border-2 after:contact-[''] after:z-[-1] after:absolute after:size-10 after:top-[-80%] after:rounded-[40%] hover:after:top-[20%] after:duration-500 after:transition-all text-[var(--text)] border-[var(--text)] after:bg-[var(--text)] hover:shadow-[0_0_20px_2px_var(--text)]`}
            onClick={onClick}
            style={{'--text': text}}
        >
            {children}
        </button>
    )
}

export function LongWidthBnt({ children='Click', isLoading=false, loadingInnerHTML = 'Wait ...', className='', bg='white', text = 'royalblue', icon = <TbCubeSend /> }) {
    return (<button className={`${className} flex items-center justify-center overflow-hidden relative group min-h-10 px-10 rounded-full font-bold font-sans border-2 border-[var(--text)] hover:bg-[var(--text)] text-[var(--text)] hover:text-[var(--bg)] transition-all duration-300 `}
        style={{ '--text': text, '--bg': bg }}
    >
        {
            isLoading ? (
                <div className="flex items-center gap-2">
                    <div className='min-w-5 aspect-square rounded-full border-[6px] animate-spin transition-all sm:duration-300 border-[var(--text)] max-sm:group-active:border-transparent sm:group-hover:border-transparent border-t-transparent max-sm:group-active:border-t-[var(--bg)] sm:group-hover:border-t-[var(--bg)]'></div>
                    <div>{loadingInnerHTML}</div>
                </div>
            ) : (
                <div className='flex items-center justify-center relative'>
                    <div className='flex items-center absolute left-2 justify-center text-2xl translate-x-0 group-hover:-translate-x-6 transition-all  duration-300 invisible group-hover:visible text-white group-hover:opacity-100'>{icon}</div>
                    <div className='flex items-center justify-center group-hover:translate-x-4 transition-transform duration-300'>{children}</div>
                </div>
            )
        }
    </button>)
}

export function ClassicButton01({ className = '', isLoading = false, loadingInnerHTML = 'Wait  das dasd...', innerHTML = 'Click', text='royalblue', bg='white' }) {

    return (<>
        <button className={`${className} min-h-10 font-sans flex items-center justify-center relative transition-all duration-300 shadow-[0_0_10px_rgb(0,0,0,.3)] overflow-hidden text-[var(--text)] active:text-[var(--bg)] sm:hover:text-[var(--bg)] bg-[var(--bg)] sm:hover:bg-transparent max-sm:active:bg-transparent font-bold px-5 rounded-full z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[var(--text)] after:size-full after:rotate-90 sm:hover:after:rotate-0 max-sm:active:after:rotate-0 after:invisible hover:after:visible after:origin-bottom-right after:transition-all sm:after:duration-300 before:content-[''] before:z-[-1] before:absolute before:invisible hover:before:visible before:size-full before:bg-[var(--text)] before:rotate-90 sm:hover:before:rotate-0 max-sm:active:before:rotate-0 before:origin-top-left before:transition-all sm:before:duration-300 group`}
            style={{ '--bg': bg, '--text': text }}
        >
            {
                isLoading ?
                    (
                        <div className="flex items-center gap-2">
                            <div className='min-w-5 aspect-square rounded-full border-[6px] animate-spin transition-all sm:duration-300 border-[var(--text)] max-sm:group-active:border-transparent sm:group-hover:border-transparent border-t-transparent max-sm:group-active:border-t-[var(--bg)] sm:group-hover:border-t-[var(--bg)]'></div>
                            <div>{loadingInnerHTML}</div>
                        </div>
                    ) : innerHTML
            }
        </button>
    </>)
}