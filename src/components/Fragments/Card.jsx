/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import hp from "../../assets/hp.jpg";
import {Link} from "react-router-dom";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {addTocart} from "../../redux/action/cartSlice";

const CardProduct = (props) => {
  const {children} = props;
  return (
    <>
      <div>
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between my-2 mx-3 ">
          {children}
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  const {image, id} = props;
  return (
    <>
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt="product"
          className="p-8 rounded-t-lg h-60 w-full object-cover"
        />
      </Link>
    </>
  );
};

const Body = (props) => {
  const {children, title} = props;
  return (
    <>
      <div className="px-5 pb-5 h-40 overflow-auto scrollbar-hide">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {title.substring(0, 20)} ...
          </h5>
          {/* aslinya gw mau pakein substring(0,100) di chilren tapi g jdi  */}
          <p className="text-s text-white">{children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const {price, id} = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-5 mt-5">
        <span className="text-xl font-bold text-white">
          ${" "}
          {price.toLocaleString("id-ID", {styles: "currency", currency: "USD"})}
        </span>
        <Button
          variant="bg-green-500"
          onClick={() => dispatch(addTocart({id, qty: 1}))}>
          add to cart
        </Button>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
