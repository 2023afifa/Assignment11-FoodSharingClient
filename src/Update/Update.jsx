import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Update = () => {
    const updateFood = useLoaderData();
    const { _id, name, image, quantity, location, expired, note } = updateFood;

    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expired = form.expired.value;
        const note = form.note.value;

        const editFood = { name, image, quantity, location, expired, note };
        console.log(editFood);

        fetch(`http://localhost:5000/allfood/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>ShareWithHeart | Update Your Food</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="bg-slate-50 mt-10 mb-20">
                <h2 className="text-center text-3xl font-semibold mb-10">Update Foods</h2>
                <form onSubmit={handleUpdateFood} className="lg:px-40">
                    <div>
                        <div className="flex justify-between gap-10 mb-10">
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Food Name:</h3>
                                <div>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter food name" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Food Image:</h3>
                                <div>
                                    <input type="text" name="image" defaultValue={image} placeholder="Enter food image" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-10 mb-10">
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Food Quantity (gm):</h3>
                                <div>
                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter food quantity" className="w-full py-2 px-5 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Expired Time (days):</h3>
                                <div>
                                    <input type="text" name="expired" defaultValue={expired} placeholder="Enter expired time (days)" className="w-full py-2 px-5 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-10 mb-10">
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Pickup Location:</h3>
                                <div>
                                    <input type="text" name="location" defaultValue={location} placeholder="Enter pickup location" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="font-bold mb-1 text-amber-500">Additional Notes:</h3>
                                <div>
                                    <input type="text" name="note" defaultValue={note} placeholder="Enter additional notes" className="w-full p-2 border-2 border-amber-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <input type="submit" value="Update Food" className="btn normal-case bg-amber-400 text-white rounded-sm" />
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Update;