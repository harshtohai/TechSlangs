import InputArea from "@/components/inputarea"


export default function Login() {
    const svg = <div></div>
    return(
        <main className="flex h-full w-full justify-center bg-secbg">
            <div className="w-[47%] h-full flex flex-col justify-center items-center">
                <InputArea svg={svg} placeholder="Email" height="h-[3rem]" />
                <InputArea svg={svg} placeholder="Password" height="h-[3rem]" />
                <button className="w-full h-[3rem] bg-pribg hover:border-[1px] border-0 border-text mt-2 flex items-center rounded-[4px] justify-center">Login/Signup</button>
            </div>
        </main>  
    )
}