/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";
import FormInput from "../components/Fragments/FormInput";
import Auth from "../components/layout/Auth";

const LoginPage = () => {
  return (
    <Auth title="Login" type="login">
      {/* form login ini salah blm di ganti */}
      <FormInput />
    </Auth>
  );
};

export default LoginPage;
