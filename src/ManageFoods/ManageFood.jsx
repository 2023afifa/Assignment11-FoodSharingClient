import { Link } from "react-router-dom";

const ManageFood = ({ c }) => {
    const { _id, name, image } = c;

    return (
        <div className="mx-20">
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <th>
                    <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs bg-orange-500 text-white">Edit</button></Link>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs bg-red-500 text-white">Delete</button>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs bg-amber-500 text-white">Manage</button>
                </th>
            </tr>
        </div>
    );
};

export default ManageFood;