import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>
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