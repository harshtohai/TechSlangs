// 'use server'

import Link from 'next/link'
import { auth } from '../../auth'


export default async function NavButtons({leftButton,leftButtonUrl,className}:{leftButton:string,leftButtonUrl:any,className?:string}) {
    let url = 'Auth'
    let session = await auth()
    if (!!session) url = `Profile`
    
    return(
        <div className="w-full flex justify-between content-between">

                <Link href={leftButtonUrl} className='w-[49.2%]'>    
                    <div className={"h-[3rem] w-full my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text " + className}>
                        <p>{leftButton}</p>
                    </div> 
                </Link>           
                <Link href={!!session ? `/profile/${session.user?.name}`:'auth'} className='w-[49.2%]'>    
                    <div className={"h-[3rem] w-full my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text " + className}>
                        <p>{url}</p>
                    </div>
                </Link>
         </div>
)
}
