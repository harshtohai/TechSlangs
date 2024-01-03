import { ReactNode } from "react";

export default function SearchArea({placeholder,svg}:{placeholder:string,svg:ReactNode}) {
    return(
        <div className="w-full flex items-center justify-center h-10 bg-pribg">
            <div className="h-full w-full flex items-center">
                <input type="text" placeholder={placeholder} className="w-[95%] color-text" />
                <div className="w-[5%] flex items-center justify-center">
                    {svg}
                </div>
            </div>
        </div>
    )
}