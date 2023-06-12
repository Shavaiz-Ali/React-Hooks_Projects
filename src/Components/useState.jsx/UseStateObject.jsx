import { useState } from "react";




const UseStateObject = () => {
    const [myobj, setMyObj] = useState({
        name: "Shavaiz",
        Age: 19,
        Degree: "FAC"
    })
    const UpdateObj =()=>{
        setMyObj(
            {...myobj, name: "Shavaiz ALi"}
        )
    }
  return (
    <>
      <div className="containerd h-[100vh] flex flex-col justify-center align-middle bg-blue-900">
        <h1 className="Hooks text-center text-white text-5xl bg-slate-900 py-8 w-[50%] rounded-full mx-auto my-5">
          Name: {myobj.name}&& Age: {myobj.Age} && Degree:{myobj.Degree}
        </h1>
        <button
          className=" h-14 rounded-sm text-white text-1xl bg-slate-600 w-32 mx-auto hover:bg-slate-700 cursor-pointer mt-5"
          onClick={UpdateObj}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
