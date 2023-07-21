import {useReducer,} from "react"

const Reducer = () =>{
    // const [count, setCount] = useState(0);
    const initialState = 0;
    const reducer = (state, action) =>{
        // if(action.type === "INCREMENT"){
        //     return state + 1
        // }
        // if(action.type === "DECREMENT"){
        //     return state - 1
        // }
        switch (action.type) {
            case "INCREMENT":
              return state + 1;
            case "DECREMENT":
              return state - 1;
            default:
              return state;
          }

    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <div className="bg-slate-800 flex flex-col justify-center items-center h-screen">
                <p className="text-white text-2xl">{state    }</p>
                <button className="bg-slate-700 w-[150px] py-3 mt-3 text-white rounded text-xl" onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
                <button className="bg-slate-700 w-[150px] py-3 mt-3 text-white rounded text-xl" onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
            </div>
        </>
    )
}

export default Reducer