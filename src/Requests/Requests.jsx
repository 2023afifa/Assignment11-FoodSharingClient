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
        return <>
            <Navbar></Navbar>
            <p className="my-52 text-center text-3xl font-bold">You did not apply any request yet</p>
            <Footer></Footer>
        </>
    }

    return (
        <div>

            <Helmet>
                <title>ShareWithHeart | My Food Requests</title>
            </Helmet>

            <Navbar></Navbar>

            <h2 className="text-center text-3xl font-semibold my-5">My Food Requests</h2>

            <div>
                <div className="overflow-x-auto my-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Donator Name</th>
                                <th>Pickup Location</th>
                                <th>Expired Time (days)</th>
                                <th>Food Status</th>
                                <th>Manage request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requestCard.map(request => <Request key={request.id} request={request}></Request>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Requests;