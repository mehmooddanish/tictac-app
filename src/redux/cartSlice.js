import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  total: 0,
  DeletePopupShow: false,
  showItems: false,
  forDeleteId: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.carts = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.carts = [...state.carts, { ...action.payload, quantity: 1 }];
      }
    },

    totalAmount: (state) => {
      state.total = state.carts.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    },
    deleteCartItem: (state, action) => {
      state.carts = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
    },

    increceCartItem: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreceCartItem: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    handelDeletePopup: (state, action) => {
      state.forDeleteId = action.payload;
      state.DeletePopupShow = true;
      document.body.style.overflow = "hidden";
    },
    handelDeleteItem: (state) => {
      state.carts = state.carts.filter((item) => item.id !== state.forDeleteId);
      console.log(state.carts.length);
      state.DeletePopupShow = false;
    },
    handleCloseDeletePopup: (state) => {
      state.DeletePopupShow = false;
      document.body.style.overflow = "auto";
    },
    handleShowItems: (state) => {
      state.showItems = true;
      document.body.style.overflow = "hidden";
    },
    handleCloseCartPopup: (state) => {
      state.showItems = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const {
  addCart,
  totalAmount,
  deleteCartItem,
  increceCartItem,
  decreceCartItem,
  handelDeletePopup,
  handelDeleteItem,
  handleCloseDeletePopup,
  handleShowItems,
  handleCloseCartPopup,
} = cartSlice.actions;
export default cartSlice.reducer;
