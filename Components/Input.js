
import { IoSearchSharp } from "react-icons/io5";

export function Input01({type='text', placeholder='Enter text here ...'}){
    return <div className="group relative flex items-center w-full max-w-[400px] h-8 shadow-[0_0_1px] rounded-md transition-all overflow-hidden">
        <input 
            type={type} 
            placeholder={placeholder}
            className="bg-transparent w-full h-full px-2 flex items-center outline-none font-semibold"
        />
        <div className="absolute right-2">
            {/* <Button01_sm title='Search ' icon={<IoSearchSharp />} /> */}
        </div>
    </div>
}