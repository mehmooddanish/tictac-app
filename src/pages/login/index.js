import React, { useState } from "react";

const LogIn = () => {
  const [name, setName] = useState("")
  const [password, setPassowrd] = useState("")
  const [showPassword, setShowPassword] = useState(false)


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("email", {
      email,
      password,
      redirect: true, 
    });
  }

  return (
    <div className="flex flex-col gap-10 py-10">
      <h3 className="text-center">LogIn page</h3>

      <form>
        <div className="flex flex-col w-full max-w-[400px] mx-auto gap-5">
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Name"
            className="outline-none border-2 border-gray-600 rounded-md px-2"
          />
          <div className="relative w-full max-w-[400px]">

          <input
            type={`${showPassword ? "text" : "password"}`}
            value={password}
            onChange={(e)=>setPassowrd(e.target.value)}
            placeholder="Password"
            className="outline-none border-2 border-gray-600 rounded-md px-2 w-full"
          />
             <svg
             onClick={()=>setShowPassword(!showPassword)}
            className="absolute top-[50%] translate-y-[-50%] right-2 "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
            />
          </svg>
          </div>
          <button className="text-left p-2 bg-violet-400 w-fit rounded-md">
            Submit
          </button>

       
        </div>
      </form>
    </div>
  );
};

export default LogIn;
