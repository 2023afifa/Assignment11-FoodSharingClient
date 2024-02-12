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
            <div className="bg-slate-50 my-20">
                <div className="lg:flex gap-16 items-center mb-14 lg:mx-40">
                    <img className="w-96 mx-auto" src="https://i.ibb.co/X2wfFXG/addfood.jpg" alt="" />
                    <p className="text-xl italic">Our platform is a community of caring individuals dedicated to reducing food waste and supporting those in need. Together, we are on a mission to make the world a better place by sharing surplus food with love and compassion. Join our community, share your heart, and be part of a movement that nourishes both the body and soul. Every contribution, no matter how small, makes a significant impact in the fight against hunger and food waste. Together, we are changing lives, one heartfelt share at a time. Explore, connect, and spread the love with ShareWithHeart.</p>
                </div>
                <form onSubmit={handleAddFood} className="px-40">
                    <div>
                        <div>
                            <h3 className="font-bold mb-3">Food Name:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter food name" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Food Image:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="image" placeholder="Enter food image" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Food Quantity (gm):</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="quantity" placeholder="Enter food quantity" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Pickup Location:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="location" placeholder="Enter pickup location" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Expired Time (days):</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="expired" placeholder="Enter expired time (days)" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Additional Notes:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="note" placeholder="Enter additional notes" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">Food Status:</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="status" defaultValue="Available" placeholder="Enter food status" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Add Food" className="btn text-rose-700 bg-rose-200" />
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default AddFood;