import {Outlet} from 'react-router-dom'
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
    return (
        <>
        <div className="font-display max-w-7xl mx-auto min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
          <Footer></Footer>
          <ToastContainer />
          </>
    );
};

export default Root;