// import img1 from "../../assets/men.jpg";
import { useState, useEffect } from "react";
// import Data from "./FoodApi";
const Food = () => {
  const [foodItems, setFoodItems] = useState([]);

  const Fetch = async () => {
    try {
      const response = await fetch(
        `https://free-food-menus-api-production.up.railway.app/best-foods`
      );
      const result = await response.json();
      setFoodItems(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    Fetch();
  }, []);

  //   making navbar functional
  // const filterMenu = (category) =>{
  //     const updatedItems = fetch.filter((value) =>{
  //         return value.category === name
  //     })
  //     setFoodItems(updatedItems)
  //     console.log(setFoodItems)
  // }
  return (
    <>
      <div className="container mx-auto text-center">
        <div className="Heading py-10 text-center">
          <h1 className="text-black text-5xl">Order Your Favourite Dish</h1>
        </div>

        {/* <!-- Main navigation container --> */}
        <hr />
        <div className="Navbar mt-5">
          <nav className="flex flex-wrap justify-around">
            <li className="text-white sm:text-xl text-[0.8rem] list-none bg-orange-600 py-2 md:px-9 sm:px-6 px-3 text-center outline-none border-0 rounded hover:bg-orange-500 transition-all ease cursor-pointer">
              <a href="/"
            //    onClick={() => filterMenu("burgers")}
               >
                Burgers
              </a>
            </li>
            <li className="text-white sm:text-xl text-[0.8rem] list-none bg-orange-600 py-2 md:px-9 sm:px-6 px-3 text-center outline-none border-0 rounded hover:bg-orange-500 transition-all ease cursor-pointer">
              <a href="/"
            //    onClick={() => filterMenu("fried-chicken")}
              >
                Fried Chicken
              </a>
            </li>
            <li className="text-white sm:text-xl text-[0.8rem] list-none bg-orange-600 py-2 md:px-9 sm:px-6 px-3 text-center outline-none border-0 rounded hover:bg-orange-500 transition-all ease cursor-pointer">
              <a href="/" 
            //   onClick={() => filterMenu("pizzas")}/
              >
                Pizzas
              </a>
            </li>
            <li className="text-white sm:text-xl text-[0.8rem] list-none bg-orange-600 py-2 md:px-9 sm:px-6 px-3 text-center outline-none border-0 rounded hover:bg-orange-500 transition-all ease cursor-pointer">
              <a href="/"
            //    onClick={() => filterMenu("sandwiches")}
               >
                SandWiches
              </a>
            </li>
            <li className="text-white sm:text-xl text-[0.8rem] list-none bg-orange-600 py-2 md:px-9 sm:px-6 px-3 text-center outline-none border-0 rounded hover:bg-orange-500 transition-all ease cursor-pointer">
              <a href="/"
            //    onClick={() => filterMenu("desserts")}
               >
                Desserts
              </a>
            </li>
          </nav>
        </div>
        <div className="Food-List mt-10">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mx-auto p-0">
            {foodItems.map((value) => {
              const { id, img, name, dsc } = value;
              return (
                <>
                  <div
                    className="card flex border border-slate-200 rounded-md shadow-lg c"
                    key={id}
                  >
                    <div className="card-image w-[40%]">
                      <img
                        src={img}
                        alt={img}
                        className="w-[100%] rounded-md"
                      />
                    </div>
                    <div className="card-content text-left ml-5">
                      <div className="name mt-2">
                        <h1 className="text-2xl font-semibold ">{name}</h1>
                      </div>
                      <div className="description mt-2">
                        <p className="text-[16px]">{dsc}</p>
                      </div>
                      <div className="price flex justify-between items-center mt-3">
                        <h1 className="text-blue-600 text-xl font-semibold">
                          $8.99
                        </h1>
                        <button className="bg-orange-600 py-2 px-4 rounded text-white text-[18px] mr-3">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
