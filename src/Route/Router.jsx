import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Component/Home";
import About from "../Component/About";
import Service from "../Component/Service";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthLayout from "../PrivateRoute/AuthLayout";
import Login from "../PrivateRoute/Login";
import Register from "../PrivateRoute/Register";
import MyProfile from "../Component/MyProfile";
import ErrorEliment from "../Erroreliment/ErrorEliment";
import UserProfile from "../UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorEliment/>,
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/",
                        element: <Service />,
                        loader: () => fetch('/advanture.json')
                    }
                ]
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/profile",
                element: <MyProfile/>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile/></PrivateRoute>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute> <ServiceDetails /> </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/advanture.json')
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData;
                }
            },
            {
                path: "/private",
                element:<AuthLayout/>,
                children:[
                    {
                       path:'/private/login', 
                       element:<Login/>
                    },
                    {
                       path:'/private/register', 
                       element:<Register/>
                    }
                ]
            }
        ]

    }
])

export default router