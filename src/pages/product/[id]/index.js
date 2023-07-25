import React from 'react'
import { useGetProductByIdQuery } from '@/redux/apiSlice'
import { useRouter } from 'next/router'
import Head from 'next/head'
const index = () => {


    const router = useRouter()
    const id = router.query.id
    const { data, isLoading } = useGetProductByIdQuery(id)
   
  
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <div className="p-4">
        <div className="w-full max-w-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <img
            className="rounded-t-lg object-fit w-full h-full max-h-[250px] min-h-[250px] lg:max-h-[400px] lg:min-h-[400px]"
            src={data?.image}
            alt=""
          />

          <div className="p-3 w-full h-hull">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {data?.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <p
              className="inline-flex items-center px-3 py-2 text-sm font-medium
              text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              hover:transition-all hover:ease-out hover:duration-200
              hover:scale-110 transform"
            >
              Read more
            </p>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default index