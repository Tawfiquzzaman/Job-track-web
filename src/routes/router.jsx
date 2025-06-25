import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            loader: () => fetch('/jobs.json'),
            children: [
                {
                    
                    index: true,
                    element: <Home></Home>,


                },
                {
                    path: 'companies',
                    element: <Companies></Companies>,
                    

                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: 'login',
                    element: <Login></Login>,

                },
                {
                    path: 'register',
                    element: <Register></Register>,

                }
            ]

        },
        {
            path: '/profile',
            element: <UserProfile></UserProfile>
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