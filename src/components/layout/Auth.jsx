import {useContext} from "react";
import {Link} from "react-router-dom";
import {DarkMode} from "../../context/DarkMode";

/* eslint-disable react/prop-types */
const Auth = (props) => {
  const {children, title, type} = props;
  const {isDarkmode, setIsDarkmode} = useContext(DarkMode);
  {
    console.log(isDarkmode);
  }

  return (
    <>
      <div
        className={`flex justify-center  min-h-screen items-center ${
          isDarkmode && "bg-slate-900"
        }`}>
        <div className="w-full max-w-xs ">
          <button
            className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
            onClick={() => setIsDarkmode(!isDarkmode)}>
            {isDarkmode ? "Light" : "Dark"}
          </button>
          <h1 className="mb-5 font-bold text-green-500 text-4xl">{title}</h1>
          <h1 className="mb-5 font-bold text-green-500 text-4xl">Test Props</h1>
          {children}
          <p className="text-sm mt-5 text-center">
            {type === "login"
              ? "dont have an account ? "
              : "Have an account ? "}

            {/* ini adalah contoh condition rendering */}

            {type === "login" && (
              <Link
                to="/register"
                className="font-bold text-green-500 underline">
                Sign Up
              </Link>
            )}

            {/*   */}

            {type === "register" && (
              <Link to="/login" className="font-bold text-green-500 underline">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
