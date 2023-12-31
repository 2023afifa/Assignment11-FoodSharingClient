import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Request from "./Request";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Requests = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    const requests = useLoaderData();
    console.log(requests);
    const requestCard = requests.filter(card => card.myemail === user.email);

    if (requestCard.length == 0) {
        return <p className="my-40 text-center text-3xl font-bold">You did not apply any request</p>
    }

    return (
        <div>

            <Helmet>
                <title>ShareWithHeart | My Food Requests</title>
            </Helmet>

            <Navbar></Navbar>

            <h2 className="text-center text-3xl font-semibold my-5">My Food Requests</h2>

            {
                requestCard.map(request => <Request key={request.id} request={request}></Request>)
            }

            <Footer></Footer>

        </div>
    );
};

export default Requests;