// import React from 'react'
import {useState, useEffect} from 'react'
const CleanUpFunc = () => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const actualWidth = () =>{
    setWindowWidth(window.innerWidth)
  }
  useEffect(() =>{
    window.addEventListener("resize", actualWidth);
    return (
      window.removeEventListener("resize", actualWidth)
    )
  })
  return (
    <>
    <div className="h-[100vh] flex flex-col items-center justify-center bg-blue-900">
      <h1 className="text-5xl text-white">Size Of Your Window</h1>
      <h1 className="text-5xl text-white mt-3">{windowWidth}</h1>
    </div>
    </>
  )
}

export default CleanUpFunc
