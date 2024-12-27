/* eslint-disable react-hooks/exhaustive-deps */

import { Children, useEffect, useRef, useState } from "react"


export default function AutoSlider({children, speed=5, effectTime=500, color='white', size=20}){

    const [childs, setChilds] = useState([]);
    const [effectBoxs, setEffectBoxs] = useState([]);

    const effectBox = useRef(null);

    function sliderEffect(){
        if(!effectBox.current) return;

        effectBox.current.childNodes.forEach(e => {
                e.classList.remove('opacity-0')
                e.classList.add('opacity-100');
                setTimeout(() => {
                    e.classList.remove('opacity-100');
                    e.classList.add('opacity-0');
                }, effectTime + 1100)
        })
    }

    async function handelSliding(){
        sliderEffect();

        await new Promise(res => setTimeout(()=>res(true), effectTime + 1000));

        setChilds((child) => {
            let temp = []
            for(let i=0; i<child.length-1; i++){
                temp.push(child[i+1])
            }
            temp.push(child[0]);
            return temp;
        })
    }

    useEffect(() => {
        setChilds(Children.toArray(children));
        
        handelEffectBoxs();
        window.addEventListener('resize', handelEffectBoxs);

        const interval = setInterval(() => {
            handelSliding();
        }, (1000*speed))

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handelEffectBoxs);
        }
    }, [children]);

    function handelEffectBoxs(){
        if(!effectBox.current) return;
        let height = effectBox.current.offsetHeight;
        let width = effectBox.current.offsetWidth;
        let pixels = Math.round((width*height)/(size*size));
        return setEffectBoxs(Array.from({length: pixels}).map(_ => Math.random()));
    }

    useEffect(() => {
        handelEffectBoxs();
    }, [effectBox.current, size])

    return (<>
        <div className="w-full h-full flex items-center relative overflow-hidden">
            {
                childs.map((child, index)=> {
                    return (
                        <div key={index} className="shrink-0 w-full h-full relative">{child}</div>
                    )
                })
            }
            <div ref={effectBox} className="effect absolute w-full h-full flex flex-wrap overflow-hidden">
            {
                effectBoxs.map((delay,i) => {
                    return(
                        <div 
                            key={i} 
                            className="aspect-square flex-1 opacity-0" 
                            style={{
                                transition: `all ${effectTime}ms ${delay}s`,
                                backgroundColor: color,
                                width: `${size}px`,
                                height: `${size}px`
                            }}
                        ></div>
                    )
                })
            }
            </div>
        </div>
    </>)
}

export function Card({children, className}){
    return (<div className={className}>
            {children}
    </div>)
}