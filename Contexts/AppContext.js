import { createContext, useEffect, useState } from "react";
import alertMsgs from "@/Functions/alertMsgs";

export const _AppContext = createContext()

export default function AppContextProvider({children}){
    const [test, setTest] = useState('test');
    const [alerts, setAlert] = useState([])

    const states = {
        test, setTest,
        alerts, setAlert,
    }

    useEffect(() => {
        window.ononline = () => setAlert((alerts) => [...alerts, alertMsgs('on-online')]) 
        window.onoffline = () => setAlert((alerts) => [...alerts, alertMsgs('on-offline')])
    }, [])


    return <_AppContext.Provider value={states}>
        {children}
    </_AppContext.Provider>
}