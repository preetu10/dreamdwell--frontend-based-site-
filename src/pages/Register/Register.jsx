import { Link } from "react-router-dom";
const Register = () => {
const handleRegister = (e) => {
    e.preventDefault();
    
}


    return (
        <div className="flex flex-col items-center justify-center">
        <div className="w-full py-6 rounded-xl border-[#CC935C] border-1 max-w-sm shadow-2xl bg-base-100 my-6">
          <p className="text-center font-bold text-3xl  mb-2 mt-5">
            Please Register
          </p>
          <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered"
                name="photo"
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
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#CC935C] text-white">Register</button>
            </div>
          </form>
         
          <hr/>
          <div>
              <p className="text-center font-base text-base mb-2 mt-5">Already have an account? Please <Link to="/login" className="font-bold text-[#CC935C]">Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;