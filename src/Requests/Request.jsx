const Request = ({ request }) => {
    const { donatorname, location, expired, status, image } = request;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/3 mx-auto mb-5">
                <figure><img className="h-40" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="font-bold">Donator Name:</span> {donatorname}</h2>
                    <p><span className="font-bold">Pickup Location:</span> {location}</p>
                    <p><span className="font-bold">Expired Time (days):</span> {expired}</p>
                    <p><span className="font-bold">Food Status:</span> {status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn text-red-500">Cancel Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;