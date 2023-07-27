import { signOut } from "next-auth/react";
import React from "react";

const dashboard = () => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      signout
    </div>
  );
};

export default dashboard;
