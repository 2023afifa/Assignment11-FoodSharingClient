import { useContext, useState } from "react";
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

    const [foodStatus, setFoodStatus] = useState([]);

    const requests = useLoaderData();
    const { id } = useParams();
    const requestCard = requests.filter(card => card.donatoremail === user.email && card.foodId === id);
    console.log(requestCard);

    if (requestCard.length == 0) {
        return <p className="my-40 text-center text-3xl font-bold">No Requests Yet</p>
    }

    const handleFoodStatus= id => {
        fetch(`https://food-share-server-three.vercel.app/request/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = foodStatus.filter(booking => booking._id !== id);
                    const updated = foodStatus.find(booking => booking._id === id);
                    updated.status = "confirm";
                    const newFoodStatus = [updated, ...remaining];
                    setFoodStatus(newFoodStatus);
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-center text-2xl font-semibold my-5">Manage Food</h2>

            <div className="mb-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                requestCard.map(allRequest => <Manage key={allRequest} allRequest={allRequest} handleFoodStatus={handleFoodStatus}></Manage>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageAFood;