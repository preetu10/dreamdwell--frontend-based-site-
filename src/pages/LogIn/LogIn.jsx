import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const LogIn = () => {

 const {signInWithGoogle,signInWithGithub}=useContext(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        
        
    }

    const handleGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            console.log(result.user);
          }).catch((error) => {
              console.error(error);
          });
    }

    
    const handleGithub = () => {
      signInWithGithub()
      .then((result) => {
          console.log(result.user);
        }).catch((error) => {
            console.error(error);
        });
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full py-6 rounded-xl border-[#CC935C] border-1 max-w-sm shadow-2xl bg-base-100 my-6">
        <p className="text-center font-bold text-3xl  mb-2 mt-5">
          Please Log In
        </p>
        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#CC935C] text-white">Login</button>
          </div>
        </form>
        <hr></hr>
        <div className="text-center my-4">
        <button onClick={handleGoogle} className="btn bg-[#CC935C] text-white">
        <FaGoogle></FaGoogle>
          Log In With Google
        </button>
        <p>OR</p>
        <button onClick={handleGithub} className="btn bg-[#CC935C] text-white">
       <FaGithub></FaGithub>
          Log In With Github
        </button>
        </div>
        <hr/>
        <div>
            <p className="text-center font-base text-base mb-2 mt-5">Do not have an account? Please <Link to="/register" className="font-bold text-[#CC935C]">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
