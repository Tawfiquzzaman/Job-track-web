import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            loader: () => fetch('jobs.json'),
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    
                    path: "",
                    element: <Home></Home>,


                },
                {
                    path: '/companies/:id',
                    element: <Companies></Companies>,
                    

                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>,

                },
                {
                    path: '/auth/register',
                    element: <Register></Register>,

                }
            ]

        },
        {
            path: '/jobs',
            element: <h2>Job Layout</h2>
        },
        {
            path: '/company',
            element: <h2>Company page</h2>
        },
        {
            path: '/*',
            element: <h2>Error404</h2>
        }

    ]
);

export default router;