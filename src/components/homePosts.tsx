import { auth } from "../../auth";
import Post from "./post";
import { showcasePosts } from "@/lib/db_functions";

export default async function PostsForHomePage() {
    
    const session = await auth()

    async function Posts(){
        const POSTS = (await (showcasePosts())).Posts
        console.log(POSTS)
        return(

        POSTS.map((word)=>{
            return <Post word={word.word} by={word.User?.name != undefined ? word.User.name: 'user'} description={word.description} upcount={word.upvotes} downcount={word.downvotes} key={word.id} commentscount={word.commentscount} sessionUserId={session?.user?.id} userId={word.userId}  id={word.id} />
            
        })
        )
        
    }

    return(

        <div className="h-full overflow-scroll w-full">
            <Posts/>
        </div>
    )
}