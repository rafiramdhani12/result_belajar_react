/* eslint-disable no-unused-vars */
import * as toolkit from "@reduxjs/toolkit";

const {configureStore, createAction, createReducer} = toolkit;
//membuat initial state
// const initialState = {
//   cart: [],
// };

// ini di refactor

const addTocart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addTocart, (state, action) => {
    // sintaks dibawah ini sama saja seperti yg ada di redux
    // cart: [...state.cart, action.payload], //payload = data

    // state.cart.push(action.payload); yg di sini singgle yg dibawah multiple reducer
    state.push(action.payload);
  });
}); //membuat builder callback

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("onCreateStore : ", store.getState());

store.subscribe(() => {
  console.log("store change : ", store.getState());
});

const action1 = addTocart({id: 1, qty: 20});
const action2 = addTocart({id: 1, qty: 20});

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(login());

// ada konsep slice yaitu menggabungkan reducer dan action nya untuk mempermudah lagi dan meringkas
