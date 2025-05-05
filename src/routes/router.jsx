import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Companies from "../pages/Companies";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
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
            element: <h2>Authentication Layout</h2>,

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