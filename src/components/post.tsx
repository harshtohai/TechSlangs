import Link from "next/link"
import AllButtons from "./buttonsGroup"

export default function Post({word,by,description,upcount,downcount,commentscount}:{word:string, by:string, description:string,upcount:string,downcount:string,commentscount:string}) {

    return(
        <div className="w-full flex items-center justify-center  bg-pribg rounded-[4px] my-[0.5rem] mb-[1rem] py-[0.5rem] pb-[1rem] px-[2rem]">
       
            <div className=" w-full justify-between flex flex-col" >

                <div className="flex justify-between flex-col">

                    <div className="flex justify-between w-full items-baseline">
                        <Link href={`word/${word}`}>
                            <div>
                                <h1 className="text-[2.5rem] text-text">{word}</h1>
                            </div>
                        </Link>
                        <div>
                            <p>by <Link className="text-text" href={`profile\\${by}`}>{by}</Link></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg ">{description}</h3>
                    </div>

                </div>    

            <AllButtons upcount={upcount} downcount={downcount} commentscount={commentscount}/>
            </div>

        </div>
    )
    
}