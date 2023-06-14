import {useRef} from 'react'


const UncontrolledForm = () =>{
const ref = useRef(null)  // useRef Hook do not re-render our component
const submitForm = (e) =>{
    e.preventDefault()
    console.log(ref)
}
    return (
        <>
         <div className="containerd flex  h-[100vh] flex-col justify-center align-middle bg-blue-900 ">
        <div className="form bg-slate-950 py-5 px-5 sm:w-[50%] w-[90%] mx-auto rounded-lg">
          <form
            action=""
            className="flex justify-center flex-col"
            onSubmit={submitForm}
          >
            <label htmlFor="name" id="name" className="text-white my-2" >
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={ref}
              // required
              className="py-5 px-10 bg-white rounded-sm text-xl"
            />

            <label htmlFor="" id="email" className="text-white  my-2" >
              E-Mail
            </label>
            <input
              type="text"
              id="email"
              ref={ref}
              name="email"
              // required
              className="py-5 px-10 bg-white rounded-sm text-xl"
            />

            <button
              type="submit"
              className="h-14 rounded-sm text-white text-1xl bg-slate-600 w-32 hover:bg-slate-700 cursor-pointer mt-5"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
        </>
    )
}
export default UncontrolledForm