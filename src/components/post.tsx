import Link from "next/link"
import AllButtons from "./buttonsGroup"
import { wordVoted } from "@/lib/db_functions"

interface Post {
    word:string|null, 
    by:string, 
    description:string|null,
    upcount:number|null,
    downcount:number|null,
    commentscount:number|null,
    id:string,
    userId:string|undefined,
    sessionUserId:string|undefined
}
export default async function Post({word,by,description,upcount,downcount,commentscount,id,userId,sessionUserId}:Post) {
    const vote:boolean|undefined|null = await wordVoted(id,sessionUserId)
    return(
            <div className="w-full flex items-center justify-center  bg-pribg rounded-[4px] my-[0.5rem] mb-[1rem] py-[0.5rem] pb-[1rem] px-[2rem]" id={id}>
                <div className=" w-full justify-between flex flex-col" >
                    <div className="flex justify-between flex-col">
                        <div className="flex justify-between w-full items-baseline">
                                <div>
                                    <h1 className="text-[2.5rem] text-text">{word}</h1>
                                </div>
                            <div>
                                <p>by <Link className="text-text" href={`/profile/${by}`}>{by}</Link></p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg ">{description}</h3>
                        </div>
                    </div>    
                    <AllButtons upcount={upcount} downcount={downcount} commentscount={commentscount} id={id} sessionUserId={sessionUserId} userId={userId} vote={vote}/>
                </div>
            </div>
    )
    
}