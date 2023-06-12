import { useState } from "react";
const Usestate = () => {
  const [changetext, setChangeText] = useState("Hooks");
  const handleClick = () => {

    // conditions 

    // if(changetext === 'Hooks'){
    //     setChangeText("useState")
    // } else{
    //     setChangeText("Hooks")
    // }

    // alternate condition or ShortHand 
    (changetext === "Hooks") ? setChangeText("useState") : setChangeText("Hooks")
  };
  return (
    <>
      <div className="containerd h-[100vh] flex flex-col justify-center align-middle bg-blue-900">
        <div className="Hooks text-center">
          <h1 className="text-white text-5xl">{changetext}</h1>
        </div>
        <button
          className=" h-14 rounded-sm text-white text-1xl bg-slate-600 w-32 mx-auto hover:bg-slate-700 cursor-pointer mt-5"
          onClick={handleClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default Usestate;
