import React from "react";
import { handelDeleteItem, handleCloseDeletePopup } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
function Modal() {
  const dispatch = useDispatch()
  const { DeletePopupShow } = useSelector((state) => state.cart);
  return (
    <div>
      {DeletePopupShow && (
        <div className="">
          <div className="w-full h-full fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="flex flex-col gap-6 w-full max-w-[500px] fixed inset-0  m-auto bg-white h-fit px-8 py-6 rounded-lg">
            <h2 className="text-2xl ">are you want to delete this item ? </h2>
            <div className="flex justify-end gap-6 ">
              <button
                onClick={() => dispatch(handelDeleteItem())}
                className=" px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:border-2 active:border-amber-500"
              >
                Yes
              </button>
              <button
                onClick={() => dispatch(handleCloseDeletePopup())}
                className="px-5 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
