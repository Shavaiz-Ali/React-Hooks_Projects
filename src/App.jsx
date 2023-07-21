import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieApi from './Components/RapidApi_Projects/MovieApi'
import Food from "./Components/FoodLIst/Food";
// import UncontrolledForm from './Components/useref/UncontrolledForm'
// import CleanUpFunc from './Components/useEffect/CleanUpFunc'
import FetchAPi from './Components/useEffect/FetchAPi'
// import ChangeTitle from './Components/useEffect/ChangeTitle'
import Todo from './Components/useState.jsx/TodoList/Todo'
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/useState.jsx/Form'
import {Redux} from './Components/Redux-Toolkit/Redux';
import Reducer from "./Components/useReducer/Reducer";
import News from "./Components/newsWebsite/News";
// import UseStateArray from './Components/useState.jsx/UseStateArray'
// import UseStateObject from './Components/useState.jsx/UseStateObject'
// import Usestate from './Components/useState.jsx/Usestate'
// import {Home} from "./Components/useContext-useReducer/Home";
// import Basket from "./Components/useContext-useReducer/Basket";
// import { StoreProvider } from "StoreContext";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/Food" element={<Food/>}/>
        <Route path="/MovieApi" element={<MovieApi/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/FetchAPi" element={<FetchAPi/>}/>
        <Route path="/Redux" element={<Redux/>}/>
        <Route path="/Reducer" element={<Reducer/>}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
    </Router>
  )
}

export default App;
