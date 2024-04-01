import PostsForHomePage from "@/components/homePosts"
import NavButtons from "@/components/navButtons"
import { redirect } from "next/navigation"


export default function Home() {
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
    <path d="M36.8125 33.25H34.9363L34.2713 32.6088C36.6792 29.8158 38.0026 26.2502 38 22.5625C38 19.5093 37.0946 16.5246 35.3983 13.9859C33.702 11.4472 31.291 9.46854 28.4702 8.30012C25.6493 7.13169 22.5454 6.82597 19.5508 7.42163C16.5562 8.01729 13.8055 9.48757 11.6465 11.6465C9.48757 13.8055 8.01729 16.5562 7.42163 19.5508C6.82597 22.5454 7.13169 25.6493 8.30012 28.4702C9.46854 31.291 11.4472 33.702 13.9859 35.3983C16.5246 37.0946 19.5093 38 22.5625 38C26.3863 38 29.9013 36.5988 32.6088 34.2713L33.25 34.9363V36.8125L45.125 48.6638L48.6638 45.125L36.8125 33.25ZM22.5625 33.25C16.6488 33.25 11.875 28.4763 11.875 22.5625C11.875 16.6488 16.6488 11.875 22.5625 11.875C28.4763 11.875 33.25 16.6488 33.25 22.5625C33.25 28.4763 28.4763 33.25 22.5625 33.25Z" fill="#DA0037"/>
  </svg>


    return(
        <>
            <main className="flex h-full w-full justify-center bg-secbg">
                <div className="w-[47%] flex h-full flex-col items-center">
                    <div className={`w-full flex items-center justify-center my-[0.5rem] mt-[0.7rem] rounded-[4px] h-[3rem]`} >
                        <div className={`h-[3rem] bg-pribg w-full flex items-center rounded-[4px] px-[2rem]`}>
                            <input type="text" placeholder='Search Slangs...' onSubmit={()=>{
                                const url:any = (document.getElementById('newWord') as HTMLInputElement).value
                                redirect(url)
                                }}  id="newWord" className="w-[95%] text-text outline-none placeholder-text text-lg bg-transparent" />
                            <div className="w-[5%] flex items-center justify-center">
                                {searchIcon}
                            </div>
                        </div>
                    </div>
                    <NavButtons leftButton = 'Add New Word' leftButtonUrl = {'/new-word'} />
                    <PostsForHomePage/>
 
                 </div>
            </main>  
        </>
        
    )
}   
