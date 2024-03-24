'use client'


import InputArea from "@/components/inputarea";


const svg = <div></div>
export default function NewWord(){
    
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] flex flex-col items-center">
                <InputArea svg={svg} placeholder="Enter New Word" height="h-[3rem]" />
                <textarea name="description" placeholder="Description about word." className="h-[15rem] w-full bg-pribg placeholder-text rounded-[4px] text-text outline-none resize-none p-[1rem] px-[2rem]"></textarea>
                <button className="w-full h-[3rem] bg-pribg hover:border-[1px] border-0 border-text mt-2 flex items-center rounded-[4px] justify-center">Add New Word</button>
            </div>
        </main>  
    )
}