const Manage = ({ allRequest, handleFoodStatus }) => {
    const { _id, myname, myemail, myimage, status } = allRequest;

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
                                <img src={myimage} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{myname}</div>
                        </div>
                    </div>
                </td>
                <td>{myemail}</td>
                <th>
                    {
                        status === "confirm" ? <span className="font-semibold text-rose-700">Deliverd</span>
                            : <button onClick={() => handleFoodStatus(_id)} className="btn btn-ghost btn-xs">Pending</button>
                    }
                </th>
            </tr>
        </div>
    );
};

export default Manage;