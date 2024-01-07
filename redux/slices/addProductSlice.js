import { createSlice } from "@reduxjs/toolkit";

const addProductSLice = createSlice({
  name: "addedProduct",
  initialState: {
    newData:null
  },
  reducers: {
    addProduct: (state,actions) => {
      state.newData = actions.payload;
    },
  },
});

export const { addProduct } = addProductSLice.actions;
export default addProductSLice.reducer;
