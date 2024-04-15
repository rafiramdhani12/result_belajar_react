import Button from "../Button";
import InputForm from "../input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert ur name"
        name="Fullname"
      />
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <InputForm
        label="confPassword"
        type="password"
        placeholder="*********"
        name="confPassword"
      />
      <Button variant="bg-green-500" style="w-full">
        Login
      </Button>
    </form>
  );
};

export default FormRegister;
