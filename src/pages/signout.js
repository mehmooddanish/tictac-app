import { signOut } from "next-auth/react";
import React from "react";

const signout = () => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      signout
    </div>
  );
};

export default signout;
