import { findWord } from "@/lib/db_functions"
import { auth } from "../../../../auth"
import Post from "@/components/post"
import Link from "next/link";
import NavButtons from "@/components/navButtons";


export default async function WordSearch({params}:{params:any}){
    const session = await auth()
    async function Posts(){
        const words = (await findWord(params.word)).Posts
        if (words.length > 0 ){
            return words.map((word)=>{
                    return <Post word={word.word} by={word.User?.name ? word.User.name : 'user'} description={word.description} upcount={word.upvotes} downcount={word.downvotes} key={word.id} commentscount={word.commentscount} sessionUserId={session?.user?.id} userId={word.userId}  id={word.id} />
            })
        }
        else{
            return <div className="w-full h-full justify-center items-center"><h1 className="text-text">No matching word was found. You can add <Link href='/new-word'>{params.word}</Link></h1></div>
        }
    }
    

    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] flex h-full flex-col items-center">
                <NavButtons leftButton = 'Home' leftButtonUrl = {'/'} />
                <div className="h-full overflow-scroll w-full">
                    <Posts/>
                </div>
            </div>
        </main>
    )

}