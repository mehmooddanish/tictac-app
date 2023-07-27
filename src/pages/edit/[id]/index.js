import React, { useEffect, useState } from "react";
import {
  useLazyGetSingleUserQuery,
  useUpdateUserMutation,
  useLazyGetAllUsersQuery,
} from "@/redux/apiSlice";
import { useRouter } from "next/router";

const EditId = () => {
  const router = useRouter()
  const { id } = router.query
 
  const [getUser, { data: user }] = useLazyGetSingleUserQuery()
  const [updateUserDetails] = useUpdateUserMutation();
  const [allUsers] = useLazyGetAllUsersQuery();


  const [updateUser, setUpdateUser] = useState({
    name: "",
    desigination: "",
  });


  const handleOnChange = (e) => {
  setUpdateUser({...updateUser , [e.target.name] : e.target.value })
}

  useEffect(() => {

    getUser(id)

    if (user) {
      setUpdateUser(user)
    }
  },[user])


  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserDetails({ id, updateUser }).then(() => {
      router.push("/").then(() => {
       allUsers()
     })
   })
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-8 max-w-[500px] mx-auto py-8 px-4">
          <input
            value={updateUser.name}
            type="text"
            placeholder="Name"
            name="name"
            className="border-2 border-gray-300 p-2"
            onChange={handleOnChange}
          />
          <input
            value={updateUser.desigination}
            type="text"
            placeholder="Designation"
            name="desigination"
            className="border-2 border-gray-300 p-2"
            onChange={handleOnChange}
          />
          <div className="flex gap-2">
            <button className="bg-blue-400 border-2 border-gray-300 w-fit p-2">
              Update
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center">

      <button
        onClick={() => router.push("/")}
        className="bg-yellow-500 border-2 border-gray-300 w-fit p-2 "
      >
        Back
      </button>
      </div>
    </div>
  );
};

export default EditId;
