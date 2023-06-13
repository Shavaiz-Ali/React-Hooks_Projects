import {useEffect, useState} from 'react'

const ChangeTitle = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{
        console.log("I am first one")
        if(count){
        document.title = `Chats (${count})`
        } else {
            document.title = `Chats`
        }
    }, [count])
    
    useEffect(() =>{
        console.log("I am second one")
    }, [])
  return (
    <>
    <div className='h-[100vh] bg-slate-900 flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-white'>{count}</h1>
        <button className='bg-blue-700 py-2 px-10 text-xl rounded-md text-white' onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
    </>
  )
}

export default ChangeTitle

