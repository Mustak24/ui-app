import { createContext, useContext, useState } from "react";

const PopoverContext = createContext();

export function PopoverOnFocus({children, position='relative', className=''}){
    const [isOpen, setOpen] = useState(false)
    return <>
        <div className={className} style={{position}}>
            <PopoverContext.Provider value={{isOpen}}>{children}</PopoverContext.Provider>
            <button className="w-full h-full absolute opacity-0" onClick={()=>setOpen(!isOpen)} onBlur={()=>setOpen(false)} ></button>
        </div>
    </>
}

export function PopoverOnHover({children, position='relative', className=''}){
    const [isOpen, setOpen] = useState(false)
    return <>
        <div className={className} style={{position}} onMouseEnter={()=>setOpen(true && window.innerWidth > 640)} onMouseLeave={()=>setOpen(false)} >
            <PopoverContext.Provider value={{isOpen}} >{children}</PopoverContext.Provider>
        </div>
    </>
}

export function Popover({ children, className, position='absolute'}) {
  const { isOpen } = useContext(PopoverContext);
  return (
    <div className={className}
      style={{
        scale: isOpen ? "1" : ".8",
        opacity: isOpen ? "1" : "0",
        visibility: isOpen ? "visible" : "hidden",
        position: position,
      }}
    >
      {children}
    </div>
  );
}

