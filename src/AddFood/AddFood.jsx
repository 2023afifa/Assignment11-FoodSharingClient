import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const AddFood = () => {

    const { user } = useContext(AuthContext);

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expired = form.expired.value;
        const note = form.note.value;
        const status = form.status.value;
        const donatorname = user.displayName;
        const donatoremail = user.email;
        const donatorimage = user.photoURL;

        const newFood = { name, image, quantity, location, expired, note, status, donatorname, donatoremail, donatorimage };
        console.log(newFood);

        fetch("http://localhost:5000/allfood", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Added the food successfully");
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>ShareWithHeart | Add Food</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="bg-slate-50 mt-10 mb-20">
                <h2 className="text-center text-3xl font-semibold mb-10">Add Your Food Here</h2>
                <form onSubmit={handleAddFood} className="px-10 lg:px-40">
                    <div>
                        <div className="md:flex justify-between gap-10 md:mb-10">
                            <div className="md:w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Food Name:</h3>
                                <div>
                                    <input type="text" name="name" placeholder="Enter food name" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Food Image:</h3>
                                <div>
                                    <input type="text" name="image" placeholder="Enter food image" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-between md:mb-10">
                            <div className="md:w-1/3">
                                <h3 className="font-bold mb-1 text-amber-500">Food Quantity (gm):</h3>
                                <div>
                                    <input type="text" name="quantity" placeholder="Enter food quantity" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="font-bold mb-1 text-amber-500">Expired Time (days):</h3>
                                <div>
                                    <input type="text" name="expired" placeholder="Enter expired time (days)" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="md:w-1/5">
                                <h3 className="font-bold mb-1 text-amber-500">Food Status:</h3>
                                <div>
                                    <input type="text" name="status" defaultValue="Available" placeholder="Enter food status" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-between gap-10 mb-10">
                            <div className="md:w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Pickup Location:</h3>
                                <div>
                                    <input type="text" name="location" placeholder="Enter pickup location" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Additional Notes:</h3>
                                <div>
                                    <input type="text" name="note" placeholder="Enter additional notes" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Add Food" className="btn normal-case bg-amber-400 text-white rounded-sm" />
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default AddFood;