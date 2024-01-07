import { ReactNode } from "react";

export default function InputArea({placeholder,svg}:{placeholder:string,svg:ReactNode}) {
    return(
        <div className="w-full flex items-center justify-center h-[3rem] my-[0.5rem] mt-[0.7rem] rounded-[4px]">
            <div className="h-full bg-pribg w-full flex items-center rounded-[4px] px-[2rem]">
                <input type="text" placeholder={placeholder} className="w-[95%] text-text outline-none placeholder-text text-lg bg-transparent" />
                <div className="w-[5%] flex items-center justify-center">
                    {svg}
                </div>
            </div>
        </div>
    )
}