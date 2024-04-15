/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";
import FormInput from "../components/Fragments/FormInput";
import FormRegister from "../components/Fragments/FornRegister";
import Auth from "../components/layout/Auth";

const RegisterPage = () => {
  return (
    <Auth title="Register" type="register">
      <FormRegister />
    </Auth>
  );
};

export default RegisterPage;
