import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import AddFood from "../AddFood/AddFood";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import Details from "../Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/availablefood",
                element: <AvailableFoods></AvailableFoods>,
            },
            {
                path: "/addfood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`),
            },
            {
                path: "/food/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/allfood"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            }
        ]
    },
]);

export default router;