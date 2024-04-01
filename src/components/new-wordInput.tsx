'use client' 

import InputArea from "@/components/inputarea";
import { addWord } from "@/lib/db_functions";
import { redirect } from "next/navigation";
import { auth } from "../../auth";


const svg = <div></div>

export function NewWordInput({sessionName}:{sessionName:string|null|undefined}){
    return(
        <form className="w-full flex flex-col items-center" action={async ()=>{
            let newWord = (document.getElementById('newWord') as HTMLInputElement).value
            let description = (document.getElementById('descpriptionBox') as HTMLInputElement).value
            if (newWord.length > 1 && description.length > 10){
                if (newWord.length < 28 && description.length < 100){
                    await addWord(newWord,description)            
                    redirect(`/profile/${sessionName}`)
                }   
                let backupdesc = description;
                (document.getElementById('descpriptionBox') as HTMLInputElement).value = 'Description or Word Too Long.';
                setTimeout(() => {
                    (document.getElementById('descpriptionBox') as HTMLInputElement).value = backupdesc;
                }, 2000);   

            }
            let backupdesc = description;
            (document.getElementById('descpriptionBox') as HTMLInputElement).value  = 'Description or Word Too Short.';
            setTimeout(() => {
                (document.getElementById('descpriptionBox') as HTMLInputElement).value = backupdesc
            }, 2000);

        }}>
        <InputArea svg={svg} placeholder="Enter New Word" height="h-[3rem]" />
        <textarea name="description" placeholder="Description about word.   " id="descpriptionBox" className="h-[15rem] w-full bg-pribg placeholder-text rounded-[4px] text-text outline-none resize-none p-[1rem] px-[2rem]"></textarea>
        <button className="w-full h-[3rem] bg-pribg hover:border-[1px] border-0 border-text mt-2 flex items-center rounded-[4px] justify-center" type="submit">Add New Word</button>
        </form>
    )
}