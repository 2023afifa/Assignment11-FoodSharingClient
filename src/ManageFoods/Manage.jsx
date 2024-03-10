const Manage = ({ allRequest, handleFoodStatus }) => {
    const { _id, myname, myemail, myimage, status } = allRequest;

    return (
        <tr className="">
            <td>
                <div className="text-center">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={myimage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{myname}</td>
            <td className="text-center">{myemail}</td>
            <th className="text-center">
                {
                    status === "confirm" ? <span className="font-semibold text-rose-700">Deliverd</span>
                        : <button onClick={() => handleFoodStatus(_id)} className="btn btn-ghost btn-xs">Pending</button>
                }
            </th>
        </tr>
    );
};

export default Manage;