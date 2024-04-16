import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
const {user}=useContext(AuthContext);

  return (
    <div className="card bg-base-100 shadow-xl py-4 my-5">
      <figure className="px-10 pt-10">
        <img
          src={user.photoURL}
          alt="user image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.displayName}</h2>
        <p>{user.email}</p>
       
      </div>
    </div>
  );
};

export default Profile;
