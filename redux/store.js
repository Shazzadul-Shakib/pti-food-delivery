import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./slices/toggleSlice";
import addProductSLiceReducer from "./slices/addProductSlice";

const rootReducer = combineReducers({
  toggle: toggleSliceReducer,
  addProduct: addProductSLiceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
