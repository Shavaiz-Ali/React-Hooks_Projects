import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [newEntries, setNewEntries] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (name && email) {
      const newEntry = {
        id: new Date().getTime.toString(),
        name: name,
        email: email,
      };
      setNewEntries([...newEntries, newEntry]);
      console.log(newEntries);
    } else {
      alert("Please fill your data")
    }
  };
  return (
    <>
      <div className="containerd flex  h-[100vh] flex-col justify-center align-middle bg-blue-900 ">
        <div className="form bg-slate-950 py-5 px-5 sm:w-[50%] w-[90%] mx-auto rounded-lg">
          <form
            action=""
            className="flex justify-center flex-col"
            onSubmit={submitForm}
          >
            <label htmlFor="name" id="name" className="text-white my-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              // required
              className="py-5 px-10 bg-white rounded-sm text-xl"
            />

            <label htmlFor="" id="email" className="text-white  my-2">
              E-Mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
        {newEntries.map((val) => {
          const { id, name, password } = val;
          return (
            <>
              <div
                className="bg-slate-950 sm:w-[60%] w-[95%] lg:flex justify-around items-center py-5 px-10 mx-auto mt-3 rounded-lg"
                key={id}
              >
                <p className="text-white text-2xl">Name: {name}</p>
                <p className="text-white text-2xl">E-mail: {password}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form;
