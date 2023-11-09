import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request = ({ request }) => {
    const { _id, donatorname, location, expired, status, image } = request;

    const handleCancelRequest = (_id, status) => {
        console.log(_id, status);
        if (status === "Available") {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#8EACCD',
                confirmButtonText: 'Yes, delete the request!'
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    fetch(`https://food-share-server-three.vercel.app/request/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Removed!',
                                    'Your request has been removed',
                                    'success'
                                )
                                // const remaining = item.filter(i => i._id !== _id);
                                // setItem(remaining);
                            }
                        })
                }
            })
        }

        else {
            toast("You can't cancel the request because your request is already confirmed by the donator");
        }
    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/3 mx-auto mb-5">
                <figure><img className="h-40" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="font-bold">Donator Name:</span> {donatorname}</h2>
                    <p><span className="font-bold">Pickup Location:</span> {location}</p>
                    <p><span className="font-bold">Expired Time (days):</span> {expired}</p>
                    <p><span className="font-bold">Food Status:</span> {status}</p>
                    <div className="card-actions">
                        <button onClick={() => handleCancelRequest(_id, status)} className="btn normal-case text-red-500">Cancel Request</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Request;