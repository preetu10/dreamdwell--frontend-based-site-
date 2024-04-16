import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(user.displayName);
    setPhoto(user.photoURL);
  }, [user.displayName, user.photoURL]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfileInfo(name, photo)
      .then(() => {
        toast.success("profile updated successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("something went wrong");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full py-6 rounded-xl border-[#CC935C] border-1 max-w-xl shadow-2xl bg-base-100 mt-10 mb-6">
        <p className="text-center font-bold text-3xl  mb-2 mt-5">
          Update Your Information
        </p>
        <form className="card-body" onSubmit={handleUpdateProfile}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered"
              disabled={true}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">URL of Your Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#CC935C] text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
