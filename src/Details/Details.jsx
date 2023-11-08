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

    const handleRequest = (foodId, donatorname, donatoremail, donatorimage, location, expired, status, image, myname, myemail, myimage) => {
        const newRequest = { foodId, donatorname, donatoremail, donatorimage, location, expired, status, image, myname, myemail, myimage };
        console.log(newRequest);

        fetch("https://food-share-server-three.vercel.app/request", {
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
                    toast("Added to cart successfully");
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-3xl font-black text-center">{food.name}</h2>

            <div className="flex items-center">

                <img className="w-1/2 my-5 mx-5" src={food.image} alt="" />

                <div>
                    <h3 className="text-xl font-bold">Donar Information</h3>
                    <p><span className="font-semibold">Name:</span> {food.donatorname}</p>
                    <p><span className="font-semibold">Food Pickup Location:</span> {food.location}</p><br /><br />
                    <h3 className="text-xl font-bold">Food Information</h3>
                    <p><span className="font-semibold">Name:</span> {food.name}</p>
                    <p><span className="font-semibold">Quantity(gm):</span> {food.quantity}</p>
                    <p><span className="font-semibold">Expired Time(day):</span> {food.expired}</p>

                    <div className="my-8">
                        <button className="btn bg-rose-200 text-rose-700" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply Request</button>
                        <form>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg mb-5">Notes</h3>
                                    <textarea className="textarea textarea-bordered w-full" placeholder="Notes..."></textarea>
                                    <p className="py-4">Donate (If you want): <input type="text" placeholder="$" className="input input-bordered w-full" /></p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button onClick={() => handleRequest(food._id, food.donatorname, food.donatoremail, food.donatorimage, food.location, food.expired, food.status, food.image, user.displayName, user.email, user.photoURL)} className="btn bg-rose-200 text-rose-700">Request</button>
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