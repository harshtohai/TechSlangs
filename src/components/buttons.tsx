'use client'

import { ReactNode } from "react";

export default function Button({className="",svg,id ,count,onClickFunction}:{svg:ReactNode,id:string, count:number|null,className?:string,onClickFunction?:any}){
    return(
        <form action={()=>{ 
            onClickFunction(id)
        }}>  
            <button type='submit' className={"flex items-center mr-[15px] " + `${className}`}>
                {svg}
                <p className="pl-[4px] text-lg">{count}</p>
            </button>
        </form>
    )
}