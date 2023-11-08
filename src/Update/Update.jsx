import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";

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

        fetch(`https://food-share-server-three.vercel.app/allfood/${_id}`, {
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
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-center text-2xl font-semibold my-5">Update Foods</h2>

            <form onSubmit={handleUpdateFood} className="px-40">
                <div>
                    <div>
                        <h3 className="font-bold mb-3">Food Name:</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Enter food name" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Food Image:</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Enter food image" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Food Quantity (gm):</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter food quantity" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Pickup Location:</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="location" defaultValue={location} placeholder="Enter pickup location" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Expired Time (days):</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="expired" defaultValue={expired} placeholder="Enter expired time (days)" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Additional Notes:</h3>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="note" defaultValue={note} placeholder="Enter additional notes" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <input type="submit" value="Update Food" className="btn text-rose-700 bg-rose-200" />
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default Update;