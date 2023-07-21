import { useGlobalContext } from "../Context/Context"



const Stories = () =>{
    const {query, searchPost} = useGlobalContext()
    return (
        <div className="container mx-auto pt-10 text-center">
            <h1 className="text-2xl font-bold  mb-3">Tech News</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input className="w-[30%]  px-3 py-4 flex justify-center items-center mx-auto text-center rounded-[5px] shadow text-xl text-black/[15] border-0 outline-none" type="text" placeholder="search here"
                     value={query}
                     onChange={(e) => searchPost(e.target.value)}
                     ></input>
                </div>
            </form>
        </div>
    )
}

export default Stories