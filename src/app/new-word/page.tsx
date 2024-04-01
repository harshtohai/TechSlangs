import NavButtons from "@/components/navButtons";
import { NewWordInput } from "@/components/new-wordInput";
import { auth } from "../../../auth";

export default async function NewWord(){
    const session = await auth()

    return(
        <main className="flex h-full w-full justify-center">
            <main className="flex h-full flex-col w-[47%] items-center bg-secbg">
                <NavButtons leftButton="Home" leftButtonUrl={'/'} className="mt-[0.7rem!important] mb-[0.2rem!important]"/>
                <NewWordInput sessionName = {session?.user?.name}/>
                
            </main>  
        </main>
    )
}