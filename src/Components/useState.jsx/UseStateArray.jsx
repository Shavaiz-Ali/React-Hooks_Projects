import { Fragment, useState } from "react";

const UseStateArray = () => {
 let arraydata = [
    {
      id: 0,
      name: "Shavaiz Ali",
      age: "19",
    },
    {
      id: 1,
      name: "Shavaiz Ali",
      age: "19",
    },
  ];
  const [myarray, setMyArray] = useState(arraydata)
  const ClearData = ()=>{
    setMyArray([])
  }
  const removeData = (id)=>{
    const newArr = myarray.filter((value) =>{
      return value.id !== id
    })
    setMyArray(newArr) 
  }
  return (
    <>
      <div className="containerd h-[100vh] flex flex-col justify-center align-middle bg-blue-900">
        {myarray.map((val) => {
          return (
            <Fragment key={val.id}>
              <h1 className="Hooks text-center text-white text-3xl bg-slate-900 py-8 w-[50%] rounded-full mx-auto my-5">
                Name: {val.name} : Age: {val.age}
                <button className="text-2xl bg-slate-950 text-white rounded-lg px-10 py-2 mx-2 hover:bg-slate-800" onClick={() => removeData(val.id)}>Remove</button>
              </h1>
            </Fragment>
          );
        })}
        <button className=" h-14 rounded-sm text-white text-1xl bg-slate-600 w-32 mx-auto hover:bg-slate-700 cursor-pointer mt-5" onClick={ClearData}>
          Clear
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
