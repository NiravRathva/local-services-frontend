import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log("dfsdf")
      const item = state.packages.find((item) => item.id === action.payload.id);
      console.log(item)
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.packages.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.packages=state.packages.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.packages = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;