import {Link} from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <div className="flex mx-auto min-h-screen justify-center items-center">
        <div className="bg-white p-40 rounded-3xl drop-shadow-2xl flex flex-col">
          ini adalah projek pertama react js saya tentang project ini adalah
          membuat ecommerce dengan fakse store api
          <Link to={"/login"} className="text-center mt-5">
            <Button>Mulai menjelajahi</Button>
          </Link>
          <p className="text-center mt-5">
            {" "}
            ini adalah credential yg disediakan oleh fakestore api yg digunakan
            untuk login dan log out <br /> username: johnd, password: m38rmF${" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
