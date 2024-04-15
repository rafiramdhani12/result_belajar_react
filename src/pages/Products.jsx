/* eslint-disable no-unused-vars */
import {useContext, useEffect, useRef, useState} from "react";

import CardProduct from "../components/Fragments/Card";

import {getProduct} from "../services/products.service";

import {useLogin} from "../hooks/useLogin";

import TableProduct from "../components/Fragments/TableProduct";
import Navbar from "../components/layout/Navbar";
import {DarkMode} from "../context/DarkMode";

// const ProductsData = [
//   {
//     id: 1,
//     title: "hp baru",
//     price: 1500000,
//     image: "/hp.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, sint optio. Quae eligendi repellat laboriosam alias hic accusantium eaque quo.",
//   },
//   {
//     id: 2,
//     title: "laptop gayming",
//     price: 10000000,
//     image: "/laptop gayming.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consectetur illum, beatae amet assumenda nisi accusantium veritatis omnis quos illo ratione. Voluptatum, ut atque, esse modi, accusantium tempore minus tempora possimus reprehenderit exercitationem ducimus voluptate corrupti! Quis aut adipisci, nesciunt quisquam dolor voluptate reiciendis quos modi eligendi, vitae natus! Similique!",
//   },
//   {
//     id: 3,
//     title: "laptop gayming",
//     price: 10000000,
//     image: "/laptop gayming.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aspernatur!",
//   },
// ];

const Products = () => {
  const {isDarkmode, setIsDarkmode} = useContext(DarkMode);
  // use state
  // const [cart, setCart] = useState([]);
  //  useEffect untuk memanipulasi komponen untuk mensingkronasi
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //    pharsing data dari localstorage ambil item dari cart
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // setiap use effect memiliki dependency bisa aja kosong untuk component didupdate (didmount)
  // ketika menggunakan component didmount kita menggambil data dari api / storage
  // ketika ada perubahan dari state cart maka akan mengubah total price / apa yg ada di localstorage
  // json stringfy digunakan untuk mengubah js value menjadi object notation parse kebalikanya untuk meyimpang ke local storage tidak bisa menerima object

  useEffect(() => {
    getProduct((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "/login";
  //   }
  // }, []);

  // masukan depency yg berbeda apa yg mau kita pantau / diubah membaca perubahan pada state yg lain

  // const HandleAdd = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? {...item, qty: item.qty + 1} : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, {id, qty: 1}]);
  //   }
  // };

  // useRef
  // useRef adalah hook yg mempunya berbagai macam fungsi referencing value bisa menyimpan sebuah informasi kalau menggunakan ref tidak menggunakan re render component berbeda dengan useState
  // fungsi useRef yg kedua adalah untuk memanipulasi dom

  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const HandleAddRef = (id) => {
  //   cartRef.current = [...cartRef.current, {id, qty: 1}];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  // spread operator adalah operasi yg memisah/membuat ulang jadi tidak menimpa bentuk utama dan juga tidak mengubah bentuk utama

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center pt-[20px] ${
          isDarkmode && "bg-slate-900"
        } `}>
        <div className="w-4/6 flex flex-wrap gap-5">
          {products.length > 0 &&
            products.map((product, index) => (
              <div key={index}>
                <CardProduct>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              </div>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-green-500 ml-5">cart</h1>
          <TableProduct products={products} />
        </div>
      </div>
      {/* <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default Products;

// React Hook adalah sebuah fitur yang diperkenalkan dalam React versi 16.8. React Hook memungkinkan pengembang untuk menggunakan state dan fitur React lainnya dalam komponen fungsional. Sebelum adanya React Hook, komponen fungsional hanya dapat menerima props dan tidak memiliki kemampuan untuk menyimpan state internal atau menggunakan fitur-fitur React seperti lifecycle methods.

// Hook memungkinkan pengembang untuk menulis komponen fungsional yang lebih kuat dan lebih ekspresif dengan menggunakan state dan lifecycle methods tanpa harus mengubah komponen menjadi kelas. Ini meningkatkan fleksibilitas dalam penulisan kode dan membuat pengembangan aplikasi dengan React lebih intuitif.

// Contoh React Hook yang paling umum adalah useState, yang memungkinkan pengembang untuk menggunakan state dalam komponen fungsional. Selain itu, ada juga useEffect, useContext, useMemo, dan banyak lagi yang memungkinkan pengembang untuk mengelola state, efek samping, dan konteks dalam komponen fungsional dengan mudah. Dengan menggunakan Hook, pengembang dapat menulis komponen yang lebih bersih, lebih mudah dimengerti, dan lebih mudah diuji.
