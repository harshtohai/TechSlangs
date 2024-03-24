import { auth } from "../../../auth"
import { redirect } from "next/navigation"
export default async function Redirector(){
    let session = await auth()
    redirect(`/profile/${session?.user?.name}`)
    // return <div className="h-full w-full flex justify-center items-center"><h2 className="text-text">Just a second...</h2></div> 

}