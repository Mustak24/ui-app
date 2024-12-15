
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState, useEffect } from "react";

export function Input01({type='text', placeholder='Enter text here ...'}){
    return <div className="group relative flex items-center w-full min-w-[180px] max-w-[400px] h-8 shadow-[0_0_1px] rounded-md transition-all overflow-hidden">
        <input 
            type={type} 
            placeholder={placeholder}
            className="bg-transparent w-full h-full px-2 flex items-center outline-none font-semibold text-xs"
        />
    </div>
}

export function Textarea({name='textarea', placeholder='Enter Text ...', required=false}) {
    return (<>
        <div className="border-2 has-[.textarea:invalid:not(:placeholder-shown)]:border-red-500 has-[.textarea:valid:not(:placeholder-shown)]:border-green-500 border-[var(--text)] relative rounded-[20px] has-[.textarea:focus]:border-sky-500 overflow-hidden min-w-[200px] w-full min-h-[80px] px-[15px] flex items-center justify-center">
            <textarea
                name={name}
                placeholder={placeholder}
                required={required || false}
                className="textarea bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-[var(--text)] text-sm w-full h-full outline-none resize-none"
                style={{ scrollbarWidth: "none" }}
            ></textarea>
        </div>
    </>)
}

export function DefaultTextarea({name='textarea', placeholder='Enter Text ...', required=false}) {
    return (<>
        <div className="border-2 border-[var(--text)] opacity-70 relative rounded-[20px] has-[.textarea:focus]:opacity-100 overflow-hidden min-w-[200px] w-full min-h-[80px] px-[15px] flex items-center justify-center">
            <textarea
                name={name}
                placeholder={placeholder}
                required={required || false}
                className="textarea bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-[var(--text)] text-sm w-full h-full outline-none resize-none"
                style={{ scrollbarWidth: "none" }}
            ></textarea>
        </div>
    </>)
}

export function Input({type='text', id, name, placeholder='Type here ..', minLength}) {

    const [_, setPasswordShow] = useState(false)
    const [inputType, setInputType] = useState(type || 'text')
    const [iconRotation, setIconRotation] = useState(0)
    if(!id) id = id || name || String(parseInt(Math.random()*1000))

    return (
        <>
            <label htmlFor={id} className={`flex items-center border-2 relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] transition-all cursor-text has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:focus]:border-sky-500 border-[var(--text)]`}>
                <input
                    type={inputType}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    minLength={minLength}
                    className={`input px-[15px] bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-[var(--text)] text-sm w-full h-full outline-none ${type == 'password' && 'mr-8'}`}
                />
                {
                    type == 'password' &&
                        <div className="flex items-center justify-center absolute gap-5 right-[0px] translate-x-[50%] text-2xl text-[var(--text)] opacity-50 hover:opacity-100 cursor-pointer transition-all duration-1000" 
                        onClick={() => setPasswordShow((isPasswordShow) => {
                            setInputType(isPasswordShow ? 'password' : 'text');
                            setIconRotation(iconRotation + 180)
                            return !isPasswordShow;
                        })}
                        style={{rotate: `${iconRotation}deg`, transformOrigin: '100%'}}
                        >
                            <IoMdEye />
                            <IoMdEyeOff />
                        </div>
                }
            </label>
        </>
    )
}



export function ClassicInput({type='text', value, id, name, placeholder='Type Somthing ..', minLength}){

    const [_, setPasswordShow] = useState(false)
    const [inputType, setInputType] = useState(type || 'text')
    const [iconRotation, setIconRotation] = useState(0)
    const [inputValue, setInputValue] = useState(value || '')
    const [cursorIndex, setCursorIndex] = useState(inputValue.length)

    if (!id) id = id || name || String(parseInt(Math.random()*100))
    
    const animationDir = (dir='top') => dir ? `animate-text-comefrom-${dir}` : '';

    useEffect(() => {
        let inputBox = document.getElementById(`inputBox${id}`)
        inputBox && inputBox.scroll({left: inputBox.scrollWidth})
    }, [inputValue])

    useEffect(() => {
        let inputBox = document.getElementById(`inputBox${id}`)
        let cursor = document.getElementById(`inputCursor${id}`)
        if(!(inputBox && cursor)) return ;
        document.getElementById(`inputCursor${id}`).remove()
        if(inputValue.length == cursorIndex){
            inputBox.appendChild(cursor)
        } else {
            inputBox.insertBefore(cursor, inputBox.children[cursorIndex])
            for(let i=0; i<=inputValue.length; i++){
                inputBox.children[i]?.classList.remove(animationDir('top'))
            }
            inputBox.children[cursorIndex-1]?.classList.add(animationDir('top'))
        }
    }, [cursorIndex])

    function handleKeyUp(key) {
        if(key.length == 1) {
            setInputValue((text) => {
                text = text.split('')
                text.splice(cursorIndex,0,key)
                return [...text].join('')
            })
            return setCursorIndex((index) => index + 1)
        } else if (key == 'Backspace' || key == 'Delete') {
            setInputValue((text) => {
                text = text.split('')
                text.splice(cursorIndex - (key == 'Backspace'), 1, )
                return [...text].join('')
            })
            return key == 'Delete' || setCursorIndex((index) => index  && index - 1)
        } else if(key == 'ArrowLeft') {
            return setCursorIndex((index) => index && index - 1)
        } else if(key == 'ArrowRight') {
            return  setCursorIndex((index) => index == inputValue.length ? index : index + 1)
        } else if(key == 'ArrowUp') {
            return setCursorIndex(inputValue.length)
        } else if(key == 'ArrowDown') {
            return setCursorIndex(0);
        }
    }

    return (
        <>
            <style jsx>{`
                .animate-text-comefrom-top{animation: text-comefrom-top .5s;}
                .animate-text-comefrom-bottom{animation: text-comefrom-bottom .5s;}
                .animate-text-comefrom-left{animation: text-comefrom-left .5s;}
                .animate-text-comefrom-right{animation: text-comefrom-right .5s;}

                @keyframes text-comefrom-top{
                    0%{opacity: 0; transform: translateY(-100%);}
                    100%{opacity: 1; transform: translateY(0%);}
                }
                @keyframes text-comefrom-bottom{
                    0%{opacity: 0; transform: translateY(100%);}
                    100%{opacity: 1; transform: translateY(0%);}
                }
                @keyframes text-comefrom-left{
                    0%{opacity: 0; transform: translateX(-100%);}
                    100%{opacity: 1; transform: translateX(0%);}
                }
                @keyframes text-comefrom-right{
                    0%{opacity: 0; transform: translateX(100%);}
                    100%{opacity: 1; transform: translateX(0%);}
                }

                @keyframes h-full{
                  0%{height: 10%; opacity: 0;}
                  100%{height: 100%; opacity: 1;}
                }
            `}</style>
            <label htmlFor={id} className={`flex items-center border-2 relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px] transition-all cursor-text has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:focus]:border-sky-500 border-[var(--text)]`}>
                <input
                    type={inputType}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    minLength={minLength}
                    className="input absolute scale-0 opacity-0 w-full h-full font-semibold z-[-1]"
                    value={inputValue}
                    autoComplete="off"
                    onFocus={(e) => {
                        document.getElementById(`inputCursor${id}`)?.classList.replace('border-0', 'border-[1px]')   
                    }}
                    onKeyDown={(e) => handleKeyUp(e.key)}
                    onBlur={(e) => {
                        document.getElementById(`inputCursor${id}`)?.classList.replace('border-[1px]', 'border-0')
                    }}
                />
                <div 
                    id={`inputBox${id}`} 
                    className={`w-full h-full py-[5px] relative font-semibold text-sm flex items-center overflow-x-scroll ${type == 'password' ? 'mr-5': ''}`}
                    onClick={(e) => {
                        let index = e.target.dataset?.index || inputValue.length
                        setCursorIndex(() => parseInt(index))
                    }} 
                >
                    <span id={`inputCursor${id}`} className="border-0 border-[var(--text)] h-full relative animate-[h-full_.6s_infinite_alternate]"></span>
                    {
                        !inputValue ? (
                            <span className="text-nowrap absolute text-[var(--text)] opacity-50 font-medium pl-1 select-none">{placeholder}</span>
                        ) : (
                            inputValue.split('').map((char, index) => <span key={index} data-index={index} className={`text-sm font-semibold ${char==' ' && inputType!='password'?'mx-1':''} ${animationDir('top')}`}>{inputType == 'password' ? 'x' : char}</span>)
                        )
                    }
                </div>
                {
                    type == 'password' &&
                        <div className="flex items-center justify-center absolute gap-5 right-0 translate-x-[50%] text-2xl opacity-50 hover:opacity-100 hover:text-[var(--text)] cursor-pointer transition-all duration-1000" 
                        onClick={() => setPasswordShow((isPasswordShow) => {
                            setInputType(isPasswordShow ? 'password' : 'text');
                            setIconRotation(iconRotation + 180)
                            return !isPasswordShow;
                        })}
                        style={{rotate: `${iconRotation}deg`, transformOrigin: '100%'}}
                        >
                            <IoMdEye />
                            <IoMdEyeOff />
                        </div>
                }
            </label>
        </>
    )
}
