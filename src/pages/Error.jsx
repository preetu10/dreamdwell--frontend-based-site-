import { Link } from "react-router-dom";
import 'animate.css';
const Error = () => {
    return (
        <div className="text-center mt-48 mx-auto">
            <p className="animate__animated animate__bounce font-bold text-3xl text-[#2d2b77]">404 Not Found</p>
            <button className="btn mt-8 font-bold">
             <Link to='/'>
             Go to Home
             </Link>
            </button>
        </div>
    );
};

export default Error;