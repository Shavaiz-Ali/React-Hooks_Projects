import { useEffect } from "react";
import { useState } from "react";

const MovieApi = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const [render, setRender] = useState("");

  const fetchData = async () => {
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${inputData}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c12f85e2f8msh5cca653a58d801fp15981ejsn9271b771e623",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setItems(result.d);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  //   console.log(items)
  useEffect(() => {
    fetchData();
  }, [render]);
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    setRender(inputData);
  };
  return (
    <div className="container">
      {/* search box goes here  */}
      <div className="search-Box flex py-12 justify-center items-center">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="py-2 rounded border border-black w-[30vw] px-3 outline-none mx-3"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            type="submit"
            className="py-2 px-7 text-white bg-orange-600 rounded"
          >
            Search
          </button>
        </form>
      </div>

      {
        // console.log(items)
        items.map((value) => {
          // console.log(items);
          return (
            <>
              <p className="text-center">{value.l}</p>
            </>
          );
        })
      }
    </div>
  );
};

export default MovieApi;
