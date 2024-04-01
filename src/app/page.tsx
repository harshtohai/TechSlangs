import PostsForHomePage from "@/components/homePosts"
import NavButtons from "@/components/navButtons"
import SearchBar from "@/components/searchBar"

export default function Home() {


    return( 
        <>
            <main className="flex h-full w-full justify-center bg-secbg">
                <div className="w-[47%] flex h-full flex-col items-center">
                    <SearchBar/>
                    <NavButtons leftButton = 'Add New Word' leftButtonUrl = {'/new-word'} />
                    <PostsForHomePage/>

                 </div>
            </main>  
        </>
        
    )
}   
