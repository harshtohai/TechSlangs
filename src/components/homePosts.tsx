import Post from "./post";

export default function PostsForHomePage() {

    return(

        <div className="overflow-scroll w-full">
            <Post word='Cooked' by="Anon" description="Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked." upcount="69" downcount="37" commentscount="24" />
        </div>
    )
}