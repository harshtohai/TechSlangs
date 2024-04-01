import Post from "@/components/post";
import { auth } from "../../../../auth";
import { signOut } from "../../../../auth";
import { findUser } from "@/lib/db_functions";
import Link from "next/link";

export default async function Profile({params}:{params:any}) {

    const signOutLogo = 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#DA0037" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg> 

    const home = <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.765 2.76751C20.5432 2.59458 20.27 2.50067 19.9888 2.50067C19.7075 2.50067 19.4343 2.59458 19.2125 2.76751L1.25 16.7738L2.80375 18.7388L5 17.0263V32.5C5.00132 33.1626 5.26514 33.7978 5.73369 34.2663C6.20225 34.7349 6.83736 34.9987 7.5 35H32.5C33.1626 34.9987 33.7978 34.7349 34.2663 34.2663C34.7349 33.7978 34.9987 33.1626 35 32.5V17.0375L37.1962 18.75L38.75 16.785L20.765 2.76751ZM22.5 32.5H17.5V22.5H22.5V32.5ZM25 32.5V22.5C24.9993 21.8372 24.7357 21.2017 24.267 20.733C23.7983 20.2643 23.1628 20.0007 22.5 20H17.5C16.8372 20.0007 16.2017 20.2643 15.733 20.733C15.2643 21.2017 15.0007 21.8372 15 22.5V32.5H7.5V15.0775L20 5.34001L32.5 15.09V32.5H25Z" fill="#DA0037"/>
</svg>




    let session = await auth()
    const user = (await findUser(params.id)).user
    // console.log(user)
    if (!!user != true){
        return <div className="h-full w-full flex items-center justify-center"><h1 className="text-text text-xl">Oops.. Can't find this user.</h1></div>
    }
    const userName = user?.name
    const upVotes = user?.upvotes
    const allPosts = user?.posts

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

    async function  Posts(){
        if (user?.posts != 0){
            console.log('true')
            return(
                user?.words.map((word)=>{
                    return <Post word={word.word} by={user.name} description={word.description} upcount={word.upvotes} downcount={word.downvotes} key={word.id} commentscount={word.commentscount} sessionUserId={session?.user?.id} userId={word.userId}  id={word.id} />
                })
            )
        }
        else{
            if(params.id == session?.user?.name){
                return <div className="mt-[2rem] w-full flex justify-center items-center"> <h1 className="text-text text-xl">You have'nt made any contributions yet.. :sad: </h1></div>
            }
            else{
                return <div className="mt-[2rem] w-full flex justify-center items-center"> <h1 className="text-text text-xl">{userName} have'nt made any contributions yet.. :sad: </h1></div>
            }
        }
        return
    }
    
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] flex flex-col py-[1rem] items-center">
                <div className="w-full flex items-center">
                    <Link href={'/'} >
                        <button className="w-[3.2rem] bg-pribg mr-[6px] h-[3.2rem] rounded-[4px] flex items-center justify-center">{home}</button>
                    </Link>
                    <div className="flex w-full justify-between items-center py-[0.6rem] bg-pribg px-[2rem] rounded-[4px]">
                        <h1 className="text-text text-2xl">{userName}</h1>
                        <div className="flex">
                            <h3 className="">Upvotes <span className="text-text">{upVotes}</span></h3>
                            <h3 className="ml-[1rem]">Posts <span className="text-text">{allPosts}</span></h3>
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

                       <Posts/>
                           
                    </div>
                </div>
            </div>
        </main> 
    )
}
