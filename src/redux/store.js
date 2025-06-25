import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;


