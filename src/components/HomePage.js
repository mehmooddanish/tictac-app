import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLazyGetAllProductsQuery } from "@/redux/apiSlice";
import Cart from "./Cart";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addCart, handelDeletePopup, handleShowItems } from "@/redux/cartSlice";

const Homepage = () => {
  // const [allProducts, { isLoading, data, error }] =
  //   useLazyGetAllProductsQuery();

  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    allProducts();
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((ele) => ele.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((ele) => {
        if (ele.id === item.id) {
          return { ...ele, quantity: ele.quantity + 1 };
        }
        return ele;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // const handleShowItems = () => {
  //   setShowItems(true);
  //   document.body.style.overflow = "hidden";
  // };
  const handleClosePopup = () => {
    setShowItems(false);
    document.body.style.overflow = "auto";
  };
  const handleShowModel = (id) => {
    setShowModel(true);
    setDeleteId(id);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModel = () => {
    setShowModel(false);
    document.body.style.overflow = "auto";
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotal(newTotal);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((ele) => {
      if (ele.id === id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((ele) => {
      if (ele.id === id && ele.quantity > 1) {
        return { ...ele, quantity: ele.quantity - 1 };
      }
      return ele;
    });
    setCart(updatedCart);
  };

  const handleDelate = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleDelateItem = () => {
    const updatedCart = cart.filter((item) => item.id !== deleteId);
    setCart(updatedCart);
    setShowModel(false);
    document.body.style.overflow = "auto";
  };
  // const [deleteUser] = useDeletePostMutation();
  // const [showInput, setShowInput] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  // const handelShowInput = () => {
  //   setShowInput(!showInput);
  // };

  // const handleDelete = (id) => {
  //   deleteUser(id);
  // };

  // const handleSearch = () =>{

  // }

  // useEffect(() => {
  //   allUsers();
  // }, []);

  // const filteredData = data?.filter((user) => {
  //   return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const reversedData = filteredData?.reverse();

  return (''
    // <div>
    //   <div className="pt-4 flex flex-col gap-4">
    //     <div
    //       className="flex justify-center items-center gap-4"
    //       id="top"
          
    //     >
    //       <Link href="/add">
    //         <button className="p-2 bg-gray-300">Create Post</button>
    //       </Link>
    //       <button className="p-2 bg-gray-300">Get Products</button>
    //       <Link href="https://google.com" target="_blank">
    //         google
    //       </Link>
    //       <h2
    //         className="p-2 bg-gray-300 cursor-pointer"
    //         onClick={() => dispatch(handleShowItems())}
    //       >
    //         Your Items
    //       </h2>
    //       <div className="relative ml-6">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="text-red-600"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             fill="currentColor"
    //             d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
    //           />
    //         </svg>
    //         <div className="absolute left-4 -top-3 flex items-center justify-center border border-red-600 rounded-full h-5 w-5">
    //           <span>{carts.length}</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="h-full w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 gap-6">
    //       {isLoading ? (
    //         <div className="h-full w-[100vw] flex justify-center items-center bg-slate-600">
    //           <h2 className="text-black-400">loading...</h2>{" "}
    //         </div>
    //       ) : (
    //         " "
    //       )}
    //       {data &&
    //         data.map((product) => {
    //           const allredyExist = carts.find((item) => item.id === product.id);
    //           return (
    //             <div
    //               key={product.id}
    //               className="w-full h-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
    //             >
    //               <Link href={`/product/${product.id}`}>
    //                 <img
    //                   className="rounded-t-lg object-fill w-full h-full max-h-[250px] min-h-[250px] lg:max-h-[400px] lg:min-h-[400px]"
    //                   src={product.image}
    //                   alt=""
    //                 />
    //               </Link>

    //               <div className="p-3 w-full h-full">
    //                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
    //                   {product.title}
    //                 </h5>
    //                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //                   Here are the biggest enterprise technology acquisitions of
    //                   2021 so far, in reverse chronological order.
    //                 </p>

    //                 <div className="w-full flex justify-between">
    //                   <button
    //                     onClick={() => dispatch(addCart(product))}
    //                     className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    //                   >
    //                     Add To Cart
    //                   </button>

    //                   {allredyExist ? (
    //                     <button
    //                       onClick={() =>
    //                         dispatch(handelDeletePopup(product.id))
    //                       }
    //                       className=" px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
    //                     >
    //                       Remove from Cart
    //                     </button>
    //                   ) : null}
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>

    //   <Cart
    //     cart={cart}
    //     handleClosePopup={handleClosePopup}
    //     total={total}
    //     handleDelate={handleDelate}
    //     increaseQuantity={increaseQuantity}
    //     calculateTotal={calculateTotal}
    //     decreaseQuantity={decreaseQuantity}
    //   />
    //   <Modal
    //     showModel={showModel}
    //     handleCloseModel={handleCloseModel}
    //     handleDelateItem={handleDelateItem}
    //   />
    // </div>
  );
};

export default Homepage;
