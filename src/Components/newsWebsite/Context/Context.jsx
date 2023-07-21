// context creation 
/// Provider 
//consumer removed by useContext Hook
import React, {useContext, useReducer, useEffect} from "react";
import reducer from "./reducer"
const AppContext = React.createContext();


const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: []
}

let API  = `http://hn.algolia.com/api/v1/search?`;

// to create a provider function
const AppProvider = ({children}) => { 
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchApiData = async (url) =>{
    dispatch({type: "SET_LOADING"})
       try{
           const res = await fetch(url);
           const data = await res.json(res);
           console.log(data)
           dispatch({type: "GET_STORIES",
           payload : {
            hits: data.hits,
            nbPages: data.nbPages
           }
                })
       }catch(error){
           console.log(error)
       }
   }
   
   const searchPost = (searchQuery) =>{
        dispatch({type: "SEARCH_QUERY",
                payload: searchQuery   
                });
   }
   // pagination 
   const getNextPage = () => {
    dispatch({type: "NEXT_PAGE"})
   }
   const getPrevPage = () => {
    
    dispatch({type: "PREV_PAGE"})
   }
   const removePost = (id) => {
        dispatch({type: "REMOVE_POST", payload: id})
   }

   useEffect(() =>{
       fetchApiData(`${API}query=${state.query}&page=${state.page}`);
   }, [state.query, state.page]);

    return  <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>{children}</AppContext.Provider>;
}

// custom hook creation 

const useGlobalContext = () =>{
     return  useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext,}