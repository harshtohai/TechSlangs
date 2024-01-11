import Post from "@/components/post";

export default function Profile() {
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] h-full flex flex-col justify-center py-[1rem] items-center">
                <div className="flex w-full justify-between items-center h-[3rem] bg-pribg px-[2rem]">
                    <h1 className="text-text">Anon</h1>
                    <div>
                        <h3 className="">Upvotes <span className="text-text">69</span></h3>
                        <h3 className="ml-[1rem]">Posts <span className="text-text">30</span></h3>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h1 className="my-[1rem]">Your Posts</h1>
                    <div className="overflow-scroll w-full"> 
                        <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                    </div>
                </div>
            </div>
        </main> 
    )
}