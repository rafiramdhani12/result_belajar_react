/* eslint-disable no-unused-vars */
import * as toolkit from "@reduxjs/toolkit";

const {configureStore, createSlice} = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("ONCREATE STORE : ", store.getState());

store.subscribe(() => {
  console.log("store change : ", store.getState());
});

store.dispatch(cartSlice.actions.addTocart({id: 1, qty: 20}));
// ada konsep slice yaitu menggabungkan reducer dan action nya untuk mempermudah lagi dan meringkas
