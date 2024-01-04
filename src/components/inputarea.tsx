import { ReactNode } from "react";

export default function InputArea({placeholder,svg}:{placeholder:string,svg:ReactNode}) {
    return(
        <div className="w-full flex items-center justify-center h-[5rem] sticky my-[1rem] bg-pribg rounded-[4px]">
            <div className="h-full w-full flex items-center px-[2rem]">
                <input type="text" placeholder={placeholder} className="w-[95%] text-text outline-none placeholder-text text-lg bg-transparent" />
                <div className="w-[5%] flex items-center justify-center">
                    {svg}
                </div>
            </div>
        </div>
    )
}