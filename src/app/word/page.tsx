import Comment from "@/components/comment";
import Post from "@/components/post";

export default function WordPage() {
    return(
        <main className="flex w-full justify-center bg-secbg">
            <div className="w-[47%] flex flex-col bg-pribg items-center my-[1rem] rounded-[4px]">
                <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
                <Comment description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upvotes="69" downvotes="37" id="1"/>
                <Comment description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upvotes="69" downvotes="37" id="2"/>
                <Comment description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upvotes="69" downvotes="37" id="3"/>
                <Comment description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upvotes="69" downvotes="37" id="4"/>
            </div>
        </main>  
    )
}