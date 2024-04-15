import axios from "axios";

export const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response);
      callback(response.data);
    })
    .catch((error) => console.log(error));
};
export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      console.log(response);
      callback(response.data);
    })
    .catch((error) => console.log(error));
};

// jika ada fecthing data pasti ada try and catch / then and catch
