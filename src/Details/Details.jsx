import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Details = () => {
    const foodDetail = useLoaderData();
    const { id } = useParams();
    const food = foodDetail.find(food => food._id == id);

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
                        <button className="btn bg-rose-200 text-rose-700" onClick={() => document.getElementById('my_modal_2').showModal()}>Request</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-5">Notes</h3>
                                <textarea className="textarea textarea-bordered w-full" placeholder="Notes..."></textarea>
                                <p className="py-4">Donate (If you want): <input type="text" placeholder="$" className="input input-bordered w-full" /></p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Details;