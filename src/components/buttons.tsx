'use client'

import { ReactNode } from "react";
import { upVoteWord,downVoteWord,deleteWord,deDownVoteWord,deUpVoteWord, fromDownToUp, fromUpToDown} from "@/lib/db_functions"


interface Button {svg:ReactNode,id:string, count:number|null,className?:string,state?:boolean|undefined|null,voteState?:boolean|undefined|null,stateUpdate?:any,countUpdate?:any,buttonType?:string, changeCount?:number, alterCountUpdate?:any,}

export default function Button({className="",svg,id ,count,state,stateUpdate,countUpdate,changeCount,buttonType,voteState,alterCountUpdate,}:Button){
    return(
            <button onClick={()=>{
              console.log(buttonType)
                if (buttonType == 'UpVote'){
                    // if (sessionid == undefined ) return
                    switch (voteState) {
                        case true:
                            deUpVoteWord(id)
                            break 
                        case false:
                            fromDownToUp(id)
                            if (alterCountUpdate) alterCountUpdate((prevCount: number) => prevCount-1)
                            break
                        case null:
                            upVoteWord(id)
                            break
                    }
                }

                if(buttonType == 'DownVote'){
                    switch(voteState){
                        case true:
                            fromUpToDown(id)
                            if (alterCountUpdate) alterCountUpdate((prevCount: number) => prevCount-1)
                            break
                        case false:
                            deDownVoteWord(id)
                            break
                        case null: 
                            downVoteWord(id)
                            break
                    }
                }

                if (buttonType == 'Delete') {
                    deleteWord(id);
                    (document.getElementById(id) as HTMLBodyElement).style.display = 'none';
                }


                    if (stateUpdate) stateUpdate(state)
                    
                    if (count != null && changeCount != undefined){
                        countUpdate(count + changeCount)
                    }

                }} className={`${className}` + " flex items-center mr-[15px] " }>
                {svg}
                <p className="pl-[4px] text-lg">{count}</p>
            </button>
    )
}
