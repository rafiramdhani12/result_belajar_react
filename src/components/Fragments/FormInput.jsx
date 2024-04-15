import {useEffect, useRef, useState} from "react";
import Button from "../Button";
import InputForm from "../input/Index";
import {authUser} from "../../services/auth.service";

const FormInput = () => {
  const [failed, setFailed] = useState("");
  const HandleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    authUser(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        // the dumbs think ever i have gw naro window location di lain tempat bukan di authuser command nya langsung ke execute
        // makanya validasi respon dll ke api nya g jalan
        window.location.href = "/products";
      } else {
        setFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const UsernameRef = useRef(null);

  useEffect(() => {
    UsernameRef.current.focus();
  }, []);

  // tidak bisa menggukan ref pada komponen secara langsung / props harus menggunakan react forward ref

  return (
    <form onSubmit={HandleLogin}>
      {failed && <p className="text-red-500 text-center my-5">{failed}</p>}
      <InputForm
        label="Username"
        type="text"
        placeholder="entry ur username"
        name="username"
        ref={UsernameRef}
      />
      <InputForm
        label="password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <Button variant="bg-green-500" style="w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormInput;
