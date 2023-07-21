// import {useContext} from "react"
// import  StoreContext from "./StoreConetext"

const Product = ({item}) =>{
    return(
        <>
            
            <div className=" border border-grey-400 shadow-lg p-5 rounded-md">
                <img src={item.image} alt={item.image} key={item.id} />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="sm:text-2xl text-[18px]">{item.name}</p>
                    <p className="sm:text-xl text-[18px]">{item.price}</p>
                  </div>
                  <div className="">
                    <button className="bg-indigo-900 py-2 px-5 text-white rounded" >Add to Cart</button>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Product;