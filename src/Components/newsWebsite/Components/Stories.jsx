// import {useEffect} from "react"
import {useGlobalContext} from "../Context/Context"
import {Link} from "react-router-dom"
const Stories = () =>{
  const {hits, isLoading, removePost} = useGlobalContext();
  if(isLoading) {
    return(
        <h1 className="text-center text-2xl font-bold">Loading....</h1>
    )
  }
    return (
        <>
        <div className="container mx-auto flex flex-col gap-5 py-10">
            {
                hits.map((curItem, index) =>{
                    const {title, author, objectID, num_comments, url} = curItem;
                    return(
                        <>
                            <div className="bg-white rounded shadow-lg xl:px-6 px-5 py-4 xl:w-[50%] sm:w-[80%] w-[98%] mx-auto" key={index}>
                                <h2 className="sm:text-xl text-[18px] sm:font-semibold my-2">{title}</h2>
                                <p className="text-[18px] font-normal my-2">
                                    By <span className="font-semibold">{author} </span> | <span  className="font-semibold">{num_comments}</span> Comments
                                    </p>
                                <div className="flex items-centr justify-between my-2">
                                    <Link to={url} target="_blank" className="sm:text-xl text-[18px] sm:font-semibold text-blue-600">Readmore</Link>
                                    <button className="sm:text-xl text-[18px] sm:font-semibold text-red-600" onClick={() => removePost(objectID)}>Remove</button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
         </div>
        </>
    )
}

export default Stories