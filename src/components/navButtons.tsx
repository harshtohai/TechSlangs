import Link from 'next/link'
import { auth } from '../../auth'

export default async function NavButtons() {
    let url = 'Auth'
    let session = await auth()
    if (!!session) url = `Profile`
    
    return(
        <div className="w-full flex justify-between content-between">

                <Link href={'/new-word'} className='w-[49.2%]'>    
                    <div className="h-[3rem] w-full my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text ">
                        <p>Add New Word</p>
                    </div> 
                </Link>           
                <Link href={!!session ? `/profile/${session.user?.name}`:'auth'} className='w-[49.2%]'>    
                    <div className="h-[3rem] w-full my-[0.2rem] mb-[0.8rem] bg-pribg flex items-center justify-center rounded-[4px] hover:border-[1px] border-0 border-text ">
                        <p>{url}</p>
                    </div>
                </Link>
         </div>
)
}
