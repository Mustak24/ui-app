import { _AppContext } from "@/Contexts/AppContext";
import { useContext, useEffect, useRef } from "react"


export default function Alert() {
    const {alerts} = useContext(_AppContext)
    
    return (<div className="flex flex-col h-[80%] overflow-y-scroll [&_div]:shrink-0 gap-1 fixed top-[100px] left-2 z-[1000] cursor-default">
        {(alerts || []).map((alert, i) => <AlertCard key={i} info={alert} />)}
    </div>)
}


export function AlertCard({info}) {
    const alertBox = useRef(null);
    const cardTypes = {
        info: { afterBorder: 'after:border-blue-500', text: 'text-blue-500', bg: 'bg-[rgb(59,130,246,.1)]' },
        success: { afterBorder: 'after:border-green-500', text: 'text-green-500', bg: 'bg-[rgb(34,197,94,.1)]' },
        warning: { afterBorder: 'after:border-yellow-500', text: 'text-yellow-500', bg: 'bg-[rgb(234,179,8,.1)]' },
        error: { afterBorder: 'after:border-red-500', text: 'text-red-500', bg: 'bg-[rgb(239,68,68,.1)]' },
    }
    useEffect(() => {
        setTimeout(() => {
            alertBox.current.classList.replace('opacity-0', 'opacity-1')
            alertBox.current.classList.replace('scale-[.8]', 'scale-1')
            alertBox.current.classList.replace('after:h-0', 'after:h-full')
            setTimeout(() => {
                alertBox.current.classList.replace('opacity-1', 'opacity-[.8]')
                alertBox.current.classList.replace('scale-1', 'scale-0')
                alertBox.current.classList.add('invisible')
                setTimeout(() => { alertBox.current.remove() }, 500)
            }, 4000)
        }, 100)
    }, [])

    return (<>
        <div ref={alertBox} className={`w-[250px] h-[80px] scale-[.8] opacity-0 transition-all duration-500 relative flex flex-col backdrop-blur-sm rounded-sm p-2 overflow-hidden after:content-[''] after:absolute after:translate-y-[-50%] after:top-[50%] after:left-0 after:duration-[3s] after:transition-all after:ease-linear after:h-0 after:border-2 ${cardTypes[info.type]?.afterBorder || ''} ${cardTypes[info.type]?.bg || ''} ${cardTypes[info.type]?.text || ''}`}>
            <h1 className="font-bold">{info?.title || ''}</h1>
            <p className="text-sm font-sans line-clamp-2 text-pretty">{info?.dec || ''}</p>
        </div>
    </>)
}