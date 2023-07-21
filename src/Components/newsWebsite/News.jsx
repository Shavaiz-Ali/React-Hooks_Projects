// import { useContext} from "react"
import Stories from "./Components/Stories";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";

const News = () => {
    return (
        <>
            <Search />
            <Pagination />
            <Stories />
        </>
    )
}

export default News