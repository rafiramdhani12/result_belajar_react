import {Link} from "react-router-dom";
import Button from "../Button";
import {useLogin} from "../../hooks/useLogin";
import {useContext, useState} from "react";
import {useSelector} from "react-redux";
import {DarkMode} from "../../context/DarkMode";
import {useTotalPrice} from "../../context/TotalPriceContext";

const Navbar = () => {
  const userName = useLogin();
  const {isDarkmode, setIsDarkmode} = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const {total} = useTotalPrice();

  useState(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const HandleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-green-500 text-white items-center px-10">
        {userName}
        <Button style="ml-5" onClick={HandleLogout}>
          Logout
        </Button>
        <Button style="ml-5">
          <Link to={"/profile"}>Profile</Link>
        </Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-lg ml-5">
          Items : {totalCart} | Price : $ {total}
        </div>
        <button
          className="right-2 top-2 bg-blue-600 p-2 text-white rounded ml-3"
          onClick={() => setIsDarkmode(!isDarkmode)}>
          {isDarkmode ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
