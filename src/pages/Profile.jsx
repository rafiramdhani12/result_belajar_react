import {useLogin} from "../hooks/useLogin";

const Profile = () => {
  const username = useLogin();
  return (
    <>
      <div>
        <h1 className="text-red-500 text-4xl text-center">{username}</h1>
      </div>
    </>
  );
};

export default Profile;
