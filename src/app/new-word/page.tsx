'use client'

import InputArea from "@/components/inputarea";
import { addWord } from "@/lib/db_functions";
import { auth } from "@/../auth";

const svg = <div></div>
export default function NewWord(){

    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <form className="w-[47%] flex flex-col items-center" action={async ()=>{
                'use server'
                let newWord = (document.getElementById('newWord') as HTMLInputElement).value
                let description = (document.getElementById('descpriptionBox') as HTMLInputElement).value
                // const session = await auth()
                addWord('ljad;fa', newWord,description)
                // console.log( newWord + description)
                }}>
                <InputArea svg={svg} placeholder="Enter New Word" height="h-[3rem]" />
                <textarea name="description" placeholder="Description about word.   " id="descpriptionBox" className="h-[15rem] w-full bg-pribg placeholder-text rounded-[4px] text-text outline-none resize-none p-[1rem] px-[2rem]"></textarea>
                <button className="w-full h-[3rem] bg-pribg hover:border-[1px] border-0 border-text mt-2 flex items-center rounded-[4px] justify-center" type="submit">Add New Word</button>
            </form>
        </main>  
    )
}