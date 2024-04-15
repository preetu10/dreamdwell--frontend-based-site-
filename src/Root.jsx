import {Outlet} from 'react-router-dom'
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer/Footer';
const Root = () => {
    return (
        <>
        <div className="font-display max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
          <Footer></Footer>
          </>
    );
};

export default Root;