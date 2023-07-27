import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCreateUserMutation } from "@/redux/apiSlice";

const AddPage = () => {
  const router = useRouter();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const [user, setUser] = useState({
    name: "",
    desigination: "",
  });

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name.length > 0 && user.desigination.length > 0) {
      
      await createUser(user).then(() => { 
        router.push("/");
      });
    }
  };

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 w-[50%] mx-auto py-8">
          <input
            name="name"
            type="text"
            value={user.name}
            placeholder="Name"
            className="border-2 border-gray-300 p-2"
            onChange={handleOnChange}
          />
          <input
            name="desigination"
            type="text"
            value={user.desigination}
            placeholder="Designation"
            className="border-2 border-gray-300 p-2"
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="border-2 border-gray-300 w-[80px] p-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
