import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
const routes =createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
      },
])

export default routes;