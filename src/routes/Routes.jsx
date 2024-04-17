import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Profile from "../pages/Profile/Profile";
import EstateDetail from "../pages/EstateDetail/EstateDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
const routes =createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                 loader:()=>fetch('../estates.json'),
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/update/:name",
                element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path:"/profile/:name",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path:"/property-details/:id",
                element:<PrivateRoutes><EstateDetail></EstateDetail></PrivateRoutes>,
                loader:()=>fetch('../estates.json'),
            }
        ]
      },
])

export default routes;