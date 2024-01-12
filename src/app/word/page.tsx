import Post from "@/components/post";

export default function WordPage() {
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] h-full flex flex-col bg-pribg items-center my-[1rem] rounded-[4px]">
                <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                <div className="h-[2px] w-full px-[2rem]">
                    <div className="h-full w-full bg-text"></div>
                </div>

            </div>
        </main>  
    )
}