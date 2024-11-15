export function UnderlineBox({children, innerText='Hover Me'}){
    return <div className={`relative flex items-center justify-center after:content-[''] after:absolute after:border-2 after:rounded-full after:w-0 sm:hover:after:w-full max-sm:active:after:w-full px-2 after:top-full after:opacity-0 sm:hover:after:opacity-100 max-sm:active:after:opacity-100 after:transition-all sm:duration-200`}>
        {innerText} {children}
    </div>
}

export function Logo({className}){
    return <div className={`${className} relative flex items-center justify-center size-5 border-4 aspect-square rounded-full border-t-transparent after:content-[''] after:absolute after:size-1 after:rounded-full after:border-2 after:bottom-full`}></div>
}