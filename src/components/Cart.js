import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  totalAmount,
  deleteCartItem,
  increceCartItem,
  decreceCartItem,
  handleCloseCartPopup,
} from "@/redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, total, showItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totalAmount());
  }, [carts]);
  return (
    <div>
      {showItems && (
        <div>
          <div
            onClick={() => dispatch(handleCloseCartPopup())}
            className="fixed w-full h-full inset-0 bg-black/60 backdrop-blur-sm "
          ></div>
          <div className="enterFromRight h-[calc(100vh-44px)] md:h-[calc(100vh-54px)] fixed top-[44px]  md:top-[54px] right-0 w-[400px] border-2 border-gray-300 divide-y divide-gray-600 flex flex-col bg-gray-300 justify-between">
            <div className="h-full divide-y divide-gray-600">
              {carts.map((item) => {
                return (
                  <div>
                    <div
                      key={item.id}
                      className="h-full w-full max-h-[100px] flex items-center justify-between relative"
                    >
                      <svg
                        onClick={() => dispatch(deleteCartItem(item.id))}
                        className="absolute top-1 right-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="1.5"
                          d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
                        />
                      </svg>
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-fit min-h-[100px] max-h-[100px] max-w-[100px] "
                      />

                      <div className="border-2 border-gray-500 px-2 py-1 flex w-[94px] justify-between">
                        <span
                          onClick={() => dispatch(decreceCartItem(item.id))}
                          className="cursor-pointer"
                        >
                          -
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          onClick={() => dispatch(increceCartItem(item.id))}
                          className="cursor-pointer"
                        >
                          +
                        </span>
                      </div>
                      <span className="">
                        {(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="">Total : {total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
