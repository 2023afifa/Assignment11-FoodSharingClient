import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageFood = ({ c }) => {
    const { _id, name, image } = c;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#8EACCD',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log("result", result);
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allfood/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                            // const remaining = item.filter(i => i._id !== _id);
                            // setItem(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="w-2/3 mx-auto">
            <table className="w-full">
                <tr>
                    <td className="w-1/3">
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-lg">{name}</div>
                            </div>
                        </div>
                    </td>
                    <th>
                        <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs bg-orange-500 text-white">Edit</button></Link>
                    </th>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-red-500 text-white">Delete</button>
                    </th>
                    <th>
                        <Link to={`/manage/${_id}`}><button className="btn btn-ghost btn-xs bg-amber-500 text-white">Manage</button></Link>
                    </th>
                </tr>
            </table>
        </div>
    );
};

export default ManageFood;