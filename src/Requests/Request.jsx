import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request = ({ request }) => {
    const { _id, donatorname, foodName, location, expired, status, image } = request;

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
                    fetch(`http://localhost:5000/request/${_id}`, {
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
        <div className="border-2">
            <table className="w-full border-2">
                <tr className="">
                    <th>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="font-bold text-lg">{foodName}</div>
                    </th>
                    <th>
                        {donatorname}
                    </th>
                    <th>
                        {location}
                    </th>
                    <th>
                        {expired}
                    </th>
                    <th>
                        {status}
                    </th>
                    <th>
                        <button onClick={() => handleCancelRequest(_id, status)} className="btn normal-case text-red-500">Cancel Request</button>
                    </th>
                </tr>
            </table>
            <ToastContainer />
        </div>
    );
};

export default Request;