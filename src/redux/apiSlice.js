import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/",
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: `users`,
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updateUser}) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: updateUser,
      }),
    }),
    // getProductById: builder.mutation({
    //   query: (id) => `products/${id}`,
    // }),

    // createUser: builder.mutation({
    //   query: (user) => ({
    //     url: "users",
    //     method: "POST",
    //     body: user,
    //   }),
    // }),
    // updateUser: builder.mutation({
    //   query: ({ id, updatedUser }) => {
    //     return {
    //       url: `/users/${id}`,
    //       method: "PATCH",
    //       body: updatedUser,
    //     };
    //   },
    //   invalidatesTags: ["users"],
    // }),
    // deletePost: builder.mutation({
    //   query: (id) => ({
    //     url: `users/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["users"],
    // }),
  }),
});

export const {
  // useLazyGetAllProductsQuery,
  // useGetProductByIdQuery,
  // useLazyGetUserByIdQuery,
  // useDeletePostMutation,
  // useCreateUserMutation,
  // useUpdateUserMutation,

  useLazyGetAllUsersQuery,
 useLazyGetSingleUserQuery,
  useDeleteItemMutation,
  useCreateUserMutation,
  useUpdateUserMutation
} = apiSlice;
