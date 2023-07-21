import { useGlobalContext } from "../Context/Context"


const Stories = () =>{
    const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext()
    return (
        <div className="container mx-auto pt-5">
            <div className="flex justify-center items-center mx-auto gap-5">
                <button className="bg-blue-600 px-12 py-3 text-white text-xl font-semibold hover:bg-blue-700 transition-all ease-in rounded-md" onClick={() => getPrevPage()}>Prev</button>
                <p className="text-xl font-bold">{page + 1} of {nbPages}</p>
                <button className="bg-blue-600 px-12 py-3 text-white text-xl font-semibold hover:bg-blue-700 transition-all ease-in rounded-md" onClick={() => getNextPage()}>Next</button>
            </div>
        </div>
    )
}

export default Stories