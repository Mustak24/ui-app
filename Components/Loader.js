import { useRef, useEffect } from "react"
import { useRouter } from "next/router"


export function PageLoader(){

    const router = useRouter()
    const Loader = useRef()
    
    useEffect(()=>{
        router.events.on('routeChangeStart', ()=>{
          if(!Loader?.current) return;
          Loader.current.style.display = 'block'
          setTimeout(()=>{
            Loader.current.style.transition = 'all 8s'
            Loader.current.style.width = '80%';
          },1)
        })
        router.events.on('routeChangeComplete', ()=>{
          if(!Loader?.current) return;
            setTimeout(() => {
                Loader.current.style.transition = 'all .1s'
                Loader.current.style.width = '100%';   
                setTimeout(()=>{
                    Loader.current.style.display = 'none'
                    Loader.current.style.width = '0%'
                },100)
            });
        })
      },[])

    return <div ref={Loader} className="w-0 h-1 bg-[var(--text)] opacity-50 fixed top-0 left-0 rounded-full z-[1500]"></div>
}