import React from 'react'
import { useRouter } from 'next/router'
import { useGetUserByIdQuery } from '@/redux/apiSlice'
import Link from 'next/link';
const UserId = () => {
    const router = useRouter();
    const { id } = router.query;
    
    // const { data: post, isError, isLoading } = useGetUserByIdQuery(id)
    // return (
    //     <div className='flex flex-col gap-2 p-2'>

    //         <div className='flex gap-4'>
    //         <h2>{post?.id}</h2>
    //         <h2>{post?.name}</h2>
    //         <h2>{post?.desigination}</h2>

    //         </div>

    //         <Link href="/">
    //         <button className='py-2 px-4 bg-green-300'>Home</button>
    //         </Link>
    //     </div>
    // )
}

export default UserId