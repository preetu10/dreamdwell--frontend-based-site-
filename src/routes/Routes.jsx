import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Profile from "../pages/Profile/Profile";
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
                path:"/update/:name",
                element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path:"/profile/:name",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>

            }
        ]
      },
])

export default routes;