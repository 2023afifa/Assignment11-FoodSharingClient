import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Manage from "./Manage";
import { useLoaderData, useParams } from "react-router-dom";

const ManageAFood = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    const requests = useLoaderData();
    const { id } = useParams();
    const requestCard = requests.filter(card => card.donatoremail === user.email && card.foodId === id);
    console.log(requestCard);

    if(requestCard.length == 0){
        return <p className="my-40 text-center text-3xl font-bold">No Requests Yet</p>
    }

    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-center text-2xl font-semibold my-5">Manage Food</h2>

            <div className="mb-10">
                {
                    requestCard.map(allRequest => <Manage key={allRequest} allRequest={allRequest}></Manage>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageAFood;