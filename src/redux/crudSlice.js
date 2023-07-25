import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
 
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
    reducers: {
        deleteUser: (state, action) => {
        
        }
    }

  

});

export const {} = crudSlice.actions;
export default cartSlice.reducer;
