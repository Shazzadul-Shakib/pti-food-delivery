import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./slices/toggleSlice";

const rootReducer = combineReducers({
  toggle: toggleSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
