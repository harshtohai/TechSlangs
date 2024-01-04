import Button from "./buttons"
import AllButtons from "./buttonsGroup"

export default function Post({word,by,description,upcount,downcount,commentscount}:{word:string, by:string, description:string,upcount:string,downcount:string,commentscount:string}) {

    

    return(
        <div className="w-full flex items-center justify-center h-[16rem] bg-pribg rounded-[4px] my-[0.5rem] py-[1rem] px-[2rem]">
       
        <div className="h-full w-full justify-between " >

            <div className="h-[8rem] flex justify-between flex-col">

                <div className="flex justify-between w-full items-baseline">
                    <div>
                        <h1 className="text-[2.7rem] text-text">Cooked</h1>
                    </div>
                    <div>
                        <p>by <span className="text-text">Anon</span></p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg ">Processed. Said of data that has been manipulated in some manner. Contrast with raw. See baked.
                    </h3>
                </div>

            </div>    

           <AllButtons upcount="69" downcount="34" commentscount="4"/>
        </div>

        </div>
    )
    
}