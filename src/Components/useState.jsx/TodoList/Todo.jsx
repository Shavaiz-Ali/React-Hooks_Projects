import { Fragment, useState } from "react";
import logo from "../../../assets/todo1.png";
import icon from "../../../assets/boxicon.png";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // addItems Function
  const addItems = () => {
    if (!inputData) {
      alert("Add your Data");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // Remove Items function
  const removeItem = (id) => {
    // console.log(id)
    const deletedItems = items.filter((hjh, ind) => {
      // console.log(ind );
      return ind !== id;
    });
    // console.log(deletedItems);
    setItems(deletedItems);
  };
  // handleling key press
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      addItems();
    }
  };
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div bg-slate-700 h-[100vh] text-center mx-auto">
        <div className="todo-logo py-10">
          <figure className="mx-auto">
            <img src={logo} alt={logo} className="mx-auto" />
            <fig-caption>
              <h1 className="text-white text-3xl">Enter Your Text Here</h1>
            </fig-caption>
          </figure>
        </div>
        {/* Add items  */}
        <div className="add-items">
          <div className="flex items-center justify-between px-5 bg-white xl:w-[25%] lg:w-[40%] sm:w-[55%] w-[90%] mx-auto rounded text-black">
            <span className="flex items-center">
              <img src={icon} alt={icon} />
              <input
                type="text"
                name=""
                placeholder="Add Items..."
                className="py-3 px-5 outline-none"
                value={inputData}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputData(e.target.value)}
              />
            </span>
            <span
              className="text-2xl cursor-pointer hover:text-slate-600"
              onClick={addItems}
            >
              +
            </span>
          </div>
        </div>
        {/* Added items goes here  */}
        <div className="show-items">
          {items.map((val, ind) => {
            return (
              <Fragment key={ind}>
                <div className="flex items-center justify-between text-white bg-slate-950 hover:bg-white hover:text-black xl:w-[25%] lg:w-[40%] sm:w-[55%] w-[85%] transition-all ease-in mx-auto rounded py-1 px-5 mt-3">
                  <h1 className="text-2xl ">{val}</h1>
                  <span
                    className="text-5xl cursor-pointer hover:text-red-600"
                    onClick={() => removeItem(ind)}
                  >
                    -
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* clear all button  */}
        <div className="clear-all">
          <div className="button">
            <button
              className="py-3 px-5 text-black text-2xl bg-white hover:bg-slate-950 hover:text-white transition-all ease-in rounded mt-3"
              onClick={removeAll}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
