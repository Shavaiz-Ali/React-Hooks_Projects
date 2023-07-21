

const reducer = (state , action) =>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return{
                ...state,
                isLoading: false,
                hits : action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "REMOVE_POST" :
            return {
                ...state,
                hits : state.hits.filter((curElem) => curElem.objectID !== action.payload)

            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query: action.payload
            }
            case "NEXT_PAGE": {
                let pageNum = state.page + 1;
                if (pageNum >= state.nbPages) {
                  pageNum = 0; // Go back to page 1 if exceeding the maximum number of pages.
                }
                return {
                  ...state,
                  page: pageNum,
                };
              }
              case "PREV_PAGE": {
                let pageNum = state.page - 1;
                if (pageNum <= 1) {
                  pageNum = 0; // Go to the last page if the page is less than 1.
                }
                return {
                  ...state,
                  page: pageNum,
                };
              }
              default:
                return state; // If the action type is not recognized, return the current state.
            }
}
export default reducer