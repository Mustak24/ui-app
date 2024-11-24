

export function NormalBtn({children, className='', onClick=()=>{}}){
    return <button className={`${className} rounded-md opacity-60 hover:opacity-100 bg-[var(--bgSec)] px-4 h-9 text-sm font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer`}
        onClick={onClick}
    >
        {children}
    </button>
}


export function Button({isLoading=false, loadingInnerHTML='Wait ...', className='', text='black', bg='white', children='Hover Me', onClick=()=>{}, scale=300 }) {
    return (
        <button
            className={`${className} relative z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-h-10 z-1 rounded-full flex items-center justify-center flex-col text-center transition-all duration-500 text-[var(--text)] max-sm:active:text-[var(--bg)] sm:hover:text-[var(--bg)] bg-[var(--bg)] sm:hover:bg-transparent max-sm:active:bg-transparent active:after:content-[''] after:border-2 after:border-[var(--text)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] before:border-2 before:border-[var(--text)] before:rounded-full before:transition-all after:transition-all max-sm:active:before:scale-[150] max-sm:active:after:scale-[150] sm:hover:before:scale-[var(--scale)] sm:hover:after:scale-[var(--scale)]`}
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