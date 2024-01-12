import Post from "@/components/post";

export default function Profile() {
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] h-full flex flex-col py-[1rem] items-center">
                <div className="flex w-full justify-between items-center py-[0.6rem] bg-pribg px-[2rem] rounded-[4px]">
                    <h1 className="text-text text-2xl">Anon</h1>
                    <div className="flex">
                        <h3 className="">Upvotes <span className="text-text">69</span></h3>
                        <h3 className="ml-[1rem]">Posts <span className="text-text">30</span></h3>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    <div className="flex w-full items-center justify-center">
                        <div className="bg-text h-[2px] flex-grow"></div>
                        <h1 className="my-[1rem] w-[7rem]  flex justify-center">Your Posts</h1>
                        <div className="bg-text h-[2px] flex-grow"></div>
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