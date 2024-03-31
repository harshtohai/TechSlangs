'use client'

import { ReactNode } from "react";

interface Button {svg:ReactNode,id:string, count:number|null,className?:string,onClickFunction?:any,state?:string,stateUpdate?:any,countUpdate?:any, changeCount?:number}

export default function Button({className="",svg,id ,count,onClickFunction,state,stateUpdate,countUpdate,changeCount}:Button){
    return(
            <button onClick={()=>{
                onClickFunction(id)
                stateUpdate(state)
                if (count && changeCount) countUpdate(count + changeCount)
                if (state == 'upvoted'){
                    
                } 
                }} className={`${className}` + " flex items-center mr-[15px] " }>
                {svg}
                <p className="pl-[4px] text-lg">{count}</p>
            </button>
    )
}