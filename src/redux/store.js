import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./action/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("change store : ", store.getState());
});

export default store;
