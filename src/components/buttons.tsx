'use client'

import { ReactNode } from "react";

export default function Button({svg,count}:{svg:ReactNode, count:string}){
    return(
        <button className="flex items-center mr-[15px]">
            {svg}
            <p className="pl-[4px] text-lg">{count}</p>
        </button>
    )
}