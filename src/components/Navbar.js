import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

  
  const { data: session } = useSession();
  console.log(session, "client");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = (action) => {
    if (action === "open") {
      setMobileMenu(true);
      document.body.style.overflowY = "hidden";
    }
    if (action === "close") {
      document.body.style.overflowY = "auto";
      setMobileMenu(false);
    }
  };
  let payload = {
    username: "Dave",
    password: "nextauth",
  };
  return (
    <div className="flex justify-between items-center py-2 px-8 bg-gray-300 z-10 ">
      <Link href="/">
        <h2 className="text-xl">Logo</h2>
      </Link>
      <div className="flex gap-4 items-center">
        <span className="text-green-500 font-bold">{session?.user?.name}</span>
        {session && (
          <button
            className=" hidden md:block bg-gray-400 capitalized  p-2"
            onClick={() => signOut()}
          >
            SignOut {session?.provider}
          </button>
        )}
        {session ? (
          ""
        ) : (
          <button
            className=" hidden md:block bg-gray-400  p-2"
            onClick={() => signIn("github")}
          >
            SignIn Github
          </button>
        )}

        {session ? (
          ""
        ) : (
          //   <button className="hidden md:block bg-blue-400 p-2"
          // onClick={() => signOut()}>
          //   SignOut Google
          // </button>
          <button
            className="hidden md:block bg-blue-400 p-2"
            onClick={() => signIn("google")}
          >
            SignIn Google
          </button>
        )}

        {session ? (
          ""
        ) : (
          <button
            className=" hidden md:block bg-gray-400  p-2"
            onClick={() => signIn("credentials", {
              redirect:false,
              ...payload
            })}
          >
            SignIn Credentials
          </button>
        )}
        {mobileMenu ? (
          <svg
            onClick={() => handleMobileMenu("close")}
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => handleMobileMenu("open")}
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
            />
          </svg>
        )}
      </div>

      {/* <div
        id="mobileDiv"
        className={`${
          mobileMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }  transition-all duration-500 ease-in-out absolute top-11 left-0 w-full bg-zinc-900 text-white flex flex-col items-center gap-5 py-5 `}
      >
        <span>Home</span>
        <span>Products</span>
        <span>Feature</span>
        <span>Contacts</span>
        <span>About</span>
      </div> */}
    </div>
  );
};

export default Navbar;
