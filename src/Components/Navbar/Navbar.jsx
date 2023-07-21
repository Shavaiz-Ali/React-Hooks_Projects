// import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="mx-auto">
        <nav className="bg-slate-200">
          <ul className="flex flex-wrap justify-around items-center bg-slate-900 py-5">
            <Link to={"/"} className="list-none text-white text-2xl font-semibold ">Todo</Link>
            <Link to={"/Food"} className="list-none text-white text-2xl font-semibold ">Food</Link>
            <Link to={"/MovieApi"} className="list-none text-white text-2xl font-semibold ">Movie</Link>
            <Link to={"/Form"} className="list-none text-white text-2xl font-semibold ">Form</Link>
            <Link to={"/FetchApi"} className="list-none text-white text-2xl font-semibold ">Github</Link>
            <Link to={"/Redux"} className="list-none text-white text-2xl font-semibold ">Redux</Link>
            <Link to={"/Reducer"} className="list-none text-white text-2xl font-semibold ">Reducer</Link>
            <Link to={"/News"} className="list-none text-white text-2xl font-semibold ">FetchNews</Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
