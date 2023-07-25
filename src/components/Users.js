import React, { useEffect } from "react";
import {
  useLazyGetAllUsersQuery,
  useDeleteItemMutation,
} from "@/redux/apiSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const Users = () => {
  const arr = [2, 6, 4, 8, 9, 3, 1, 0, 7];
  const newarr = arr.reverse();
  console.log(arr);
  console.log(newarr);

  const router = useRouter();

  const [allUsers, { data, isLoading, isError }] = useLazyGetAllUsersQuery();
  const [deleteUser, { isLoading: loading }] = useDeleteItemMutation();

  const reversedData = data?.slice().reverse();
  useEffect(() => {
    allUsers();
  }, []);
  const handelDelete = (id) => {
    deleteUser(id);
    allUsers();
  };

  return (
    <div className="py-2 flex flex-col gap-4 items-center">
      <button
        onClick={() => router.push(`/add`)}
        className="w-fit bg-violet-300 py-1 px-2 rounded-md"
      >
        Add User
      </button>

      <div className="w-full max-w-[800px]  border border-gray-500">
        <table className="w-full">
          <thead className="border-b border-gray-900">
            <tr className="divide-x  divide-gray-900">
              <th>Name</th>
              <th>Desigination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900 ">
            {reversedData &&
              reversedData.map((user) => {
                return (
                  <>
                    <tr
                      key={user.id}
                      className="text-center divide-x divide-gray-900 "
                    >
                      <td className="py-2">{user.name}</td>
                      <td>{user.desigination}</td>
                      <td className="space-x-2">
                        <button
                          className="w-fit bg-red-400 py-1 px-2 rounded-md"
                          onClick={() => handelDelete(user.id)}
                        >
                          Delete
                        </button>

                        <button
                          className="w-fit bg-green-400 py-1 px-2 rounded-md"
                          onClick={() => router.push(`/edit/${user.id}`)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
