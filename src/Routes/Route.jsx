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
import ManageFoods from "../ManageFoods/ManageFoods";
import Update from "../Update/Update";
import ManageAFood from "../ManageFoods/ManageAFood";
import Requests from "../Requests/Requests";
import Notes from "../Home/Notes/Notes";

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
                loader: () => fetch("http://localhost:5000/request"),
            },
            {
                path: "/addfood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
            },
            {
                path: "/managefood",
                element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/allfood"),
            },
            {
                path: "/request",
                element: <PrivateRoute><Requests></Requests></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/request"),
            },
            {
                path: "/food/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/allfood"),
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allfood/${params.id}`),
            },
            {
                path: "/manage/:id",
                element: <PrivateRoute><ManageAFood></ManageAFood></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/request"),
            },
            {
                path: "/note",
                element: <PrivateRoute><Notes></Notes></PrivateRoute>,
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