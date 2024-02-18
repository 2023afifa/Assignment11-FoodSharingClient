import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    const foodDetail = useLoaderData();
    const { id } = useParams();
    const food = foodDetail.find(food => food._id == id);

    const handleRequest = () => {
        const newRequest = {
            foodId: food._id,
            foodName: food.name,
            image: food.image,
            location: food.location,
            expired: food.expired,
            status: food.status,
            donatorname: food.donatorname,
            donatoremail: food.donatoremail,
            donatorimage: food.donatorimage,
            myname: user.displayName,
            myemail: user.email,
            myimage: user.photoURL
        };
        console.log(newRequest);

        fetch("http://localhost:5000/request", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRequest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Request added successfully");
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="flex items-center justify-evenly m-10">

                <div className="w-2/5 bg-amber-50 shadow-2xl">
                    <img className="p-10" src={food.image} alt="" />
                </div>

                <div className="p-10 bg-amber-50">
                    <h2 className="text-3xl font-bold mb-10">{food.name}</h2>
                    <h3 className="text-xl font-bold">Donar Information</h3>
                    <p><span className="font-semibold">Name:</span> {food.donatorname}</p>
                    <p><span className="font-semibold">Food Pickup Location:</span> {food.location}</p><br /><br />
                    <h3 className="text-xl font-bold">Food Information</h3>
                    <p><span className="font-semibold">Name:</span> {food.name}</p>
                    <p><span className="font-semibold">Quantity(gm):</span> {food.quantity}</p>
                    <p><span className="font-semibold">Expired Time(day):</span> {food.expired}</p>

                    <div className="my-8">
                        <button className="btn bg-amber-300 text-white rounded-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply Request</button>
                        <form>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg mb-2">Notes</h3>
                                    <textarea className="textarea textarea-bordered w-full rounded-sm" placeholder="Notes..."></textarea>
                                    <p className="mt-5">Donate (If you want):
                                        <input type="text" placeholder="$" className="input input-bordered w-full rounded-sm" />
                                    </p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button onClick={handleRequest} className="btn bg-amber-300 text-white rounded-sm">Request</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Details;