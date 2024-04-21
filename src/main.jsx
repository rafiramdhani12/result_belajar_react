/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import Products from "./pages/Products.jsx";
import Profile from "./pages/Profile.jsx";
import DetailProduct from "./pages/detail.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode";
import {TotalPriceProvider} from "./context/TotalPriceContext.jsx";
import HomePage from "./pages/HomePage.jsx";
// import Navbar from "./components/layout/Navbar.jsx";

// kalo udh kaya gini yg di render itu yg ada di router bukan app lagi tadi ada kendala style posisi nya berubah jadi taro style nya di layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    // menambahkan oarameter parameter bebas diberi nama apa saja bagimana caranya menangkap parameter tsb
    path: "/product/:id",
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        {/* <Navbar /> */}
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
