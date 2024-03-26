import Post from "@/components/post";
import { auth } from "../../../../auth";
import { signOut } from "../../../../auth";

export default async function Profile({params}:{params:any}) {
    let session = await auth()

    const signOutLogo = 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#DA0037" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg> 

    function Signout(){
        if(params.id == session?.user?.name){
            return <form action={async ()=>{ 
                    "use server"

                    await signOut()}}>
                        <button type="submit" className="w-[3.2rem] bg-pribg ml-[6px] h-[3.2rem] rounded-[4px] flex items-center justify-center">{signOutLogo}</button>
                   </form>
        } 
        return
    }
    
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] flex flex-col py-[1rem] items-center">
                <div className="w-full flex items-center">
                    <div className="flex w-full justify-between items-center py-[0.6rem] bg-pribg px-[2rem] rounded-[4px]">
                        <h1 className="text-text text-2xl">{params.id}</h1>
                        <div className="flex">
                            <h3 className="">Upvotes <span className="text-text">69</span></h3>
                            <h3 className="ml-[1rem]">Posts <span className="text-text">30</span></h3>
                        </div>
                    </div>
                    <Signout />
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    <div className="flex w-full items-center justify-center">
                        <div className="bg-text h-[1px] flex-grow"></div>
                        <h1 className="my-[1rem] w-[7rem]  flex justify-center">Your Posts</h1>
                        <div className="bg-text h-[1px] flex-grow"></div>
                    </div>
                    <div className="w-full "> 
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                    </div>
                </div>
            </div>
        </main> 
    )
}