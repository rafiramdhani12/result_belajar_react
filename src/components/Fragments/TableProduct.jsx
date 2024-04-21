/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useContext, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {DarkMode} from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
import Button from "../Button";

const TableProduct = (props) => {
  const {products} = props;
  const cart = useSelector((state) => state.cart.data);
  const {total} = useTotalPrice();
  const {isDarkmode, setIsDarkmode} = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();

  //  {}={destructuring}

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, Item) => {
        const product = products.find((product) => product.id === Item.id);
        return acc + product.price * Item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // gw lupa menambahkan products di state nya yg mengakibatkan harga jika web nya di reset harganya reset jadi nol tidak terpantau / masuk kedalam memori (state)

  const totalPriceRef = useRef(null);

  // menggunakan useEffect bisa menggunakan berkali kali dengan fungsi yg berbeda beda
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  const HandleRemove = () => {
    localStorage.removeItem("cart");
    alert(
      "seharusnya memakai useState dan hooks lainya agar terlihat lebih dinamis dan tidak perlu di restart ketika sudah menghapus"
    );
  };

  return (
    <>
      <table
        className={`text-left table-auto border-separate border-spacing-x-5 ${
          isDarkmode && "text-white"
        }`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Prize</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* useRef tidak bisa di mapping langsung dia harus menggunakan current terlebih dahulu */}
          {products.length > 0 &&
            cart.map((cartItem) => {
              // ngambil dari array data
              const product = products.find(
                (product) => product.id === cartItem.id
              );
              return (
                <tr key={cartItem.id}>
                  <td>{product.title.substring(0, 20)}</td>
                  <td>
                    ${" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>{cartItem.qty}</td>
                  <td>
                    ${" "}
                    {(cartItem.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}
          {/* fungsi ref sama seperti document.blablabla kalao vanilla js memanipulasi dom menggukan id ini menggunakan ref */}
          <tr ref={totalPriceRef}>
            <td colSpan={3}>
              <b> Total Price </b>
            </td>
            <td>
              <b>
                ${" "}
                {total.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "USD",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={HandleRemove}>Hapus Belanjaan</Button>
    </>
  );
};

export default TableProduct;
