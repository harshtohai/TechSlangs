'use client'
import Link from 'next/link'


export default function NavButtons() {
    return(
        <div className="w-full flex justify-between content-center flex-wrap">
            <Link href={'/new-word'}>    
                <button className="h-[3rem] w-[19.7rem] my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text ">
                    <p>Add New Word</p>
                </button>
            </Link>

            <Link href={'/profile'}>    
                <button className="h-[3rem] w-[19.7rem] my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text ">
                    <p>Login</p>
                </button>
            </Link>

        </div>
)
}