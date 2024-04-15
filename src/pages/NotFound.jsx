import {useRouteError} from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <h1 className="my-5 text-xl">Sorry, an unexpected error has ocured</h1>
        <p className="text-lg">{error.statusText || error.message}</p>
      </div>
    </>
  );
};

export default NotFound;
