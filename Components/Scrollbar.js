import { useState, useEffect } from "react";

export default function({}){

    const [scrollbarHeight, setScrollbarHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
          let totalHeight = document.body.scrollHeight - window.innerHeight;
          let scroll = window.scrollY;
          setScrollbarHeight(scroll/totalHeight)
        })
      }, [])

    return <div className="w-[10px] bg-[var(--text)] opacity-50 fixed left-0 bottom-0 rounded-sm z-[1000]" style={{height: `${scrollbarHeight*100}%`}}></div>
}