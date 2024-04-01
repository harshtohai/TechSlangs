"use client"

import { signIn } from "next-auth/react"


export default function Login() {
    const svg = <div></div>
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] h-full flex justify-evenly items-center bg-pribg hover:border-[1px] border-0 border-text ">
                <button className="w-[50%] h-[3rem] mt-2 flex items-center rounded-[4px] justify-center" onClick={()=>{signIn('github')}}>Login/Signup with Github</button>
            </div>
        </main>  
    )
}