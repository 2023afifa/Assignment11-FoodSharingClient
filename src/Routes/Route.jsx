import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
        ]
    },
]);

export default router;