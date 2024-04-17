import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';
const Profile = () => {
const {user}=useContext(AuthContext);
useEffect(() =>{
    document.title=`DreamDwell-${user.displayName}`
},[user])

  return (
    <div className="card bg-base-100 shadow-xl py-4 my-5">
      <figure className="px-10 pt-10">
        <img
          src={user.photoURL}
          alt="user image"
          className="animate__animated animate__fadeInUp rounded-xl w-72 h-72"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title animate__animated animate__fadeInUp">{user.displayName}</h2>
        <p className="animate__animated animate__fadeInUp">{user.email}</p>
       
      </div>
    </div>
  );
};

export default Profile;
