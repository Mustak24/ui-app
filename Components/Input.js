import { Button01 } from "./Button";

export function Input01({type='text', placeholder='Enter text here ...'}){
    return <div className="group flex items-center w-full max-w-[400px] h-8 shadow-[0_0_1px] rounded-md bg-zinc-900 hover:bg-zinc-800 transition-all overflow-hidden">
        <input 
            type={type} 
            placeholder={placeholder}
            className="bg-transparent w-full h-full px-2 flex items-center outline-none font-semibold" 
        />
        <div className="absolute right-2">
            <Button01 title='Search ' />
        </div>
    </div>
}