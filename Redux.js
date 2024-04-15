import {legacy_createStore} from "redux";

// reducer

// cart di sini diambil dari use sate yg berada di product
const cartReducer = (
  state = {
    cart: [{id: 1, qty: 10}],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        // spread operator ... adalah kita bisa memasukan/ memakai state yg sebelumnya tanpa mengubah / menganggu state sebelumnya
        ...state,
        cart: [...state.cart, action.payload], //payload = data
      };
    //   jika tidak ada action type nya  maka yg akan di return adalah state nya
    default:
      return state;
  }
};

// store

const store = legacy_createStore(cartReducer);
console.log("onCreateStore : ", store.getState());

// subscribe adalah untuk melihat perubahan yg terjadi dalam store

store.subscribe(() => {
  console.log("store change : ", store.getState());
});

// dispatch
const action1 = {type: "ADD_TO_CART", payload: {id: 2, qty: 20}};
store.dispatch(action1);

// sebenarnya jika sudah di dispatch sudah ada perubahan tapi kita tidak bisa melihat isi perubahan tsb
