import { signOut } from "next-auth/react";
import React from "react";

const signout = () => {
  return <div onClick={() => signOut({ callbackUrl: "/" })}>signout</div>;
};

export default signout;
