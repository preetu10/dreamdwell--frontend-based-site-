import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const { user, logout} = useContext(AuthContext);
  const navigate=useNavigate();
  
  const links = (
    <>
      <li className="font-bold text-lg ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink to="/estates">Estates</NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink to="/about">About Us</NavLink>
      </li>

      {user && (
        <>
          <li className="font-bold text-lg">
            <NavLink to="/partners">Our Partners</NavLink>
          </li>
          <li className="font-bold text-lg ">
            <NavLink to={`/update/${user.displayName}`}>Update Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logout()
    .then(()=>{
      toast("You have successfully logged out");
      navigate("/");
    })
    .catch(() => {
      console.log("error")
    })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost font-bold text-4xl">
          <span className="text-[#CC935C]">Dream</span>Dwell
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
          {
            user?
            <>
            <button  className="tooltip tooltip-bottom" data-tip={user.displayName}>
          <Link to={`/profile/${user.displayName}`}>
          <img src={user?.photoURL} onTouchMove={user.displayName} className="rounded-full w-12 h-12 mr-3" alt="user" />
          </Link>
            </button>
             <button onClick={handleLogOut} className="btn font-bold text-lg text-white bg-[#CC935C]">
            Log Out
            </button>
            </>
            :
            <button className="btn font-bold text-lg text-white bg-[#CC935C]">
            <Link to="/login">Log In</Link>
            </button>
          }     
      </div>
    </div>
  );
};

export default Navbar;
