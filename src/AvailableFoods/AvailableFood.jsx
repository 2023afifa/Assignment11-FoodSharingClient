import { Link } from "react-router-dom";

const AvailableFood = ({ card }) => {
    const { _id, name, image, quantity, location, expired, note, status, donatorname, donatoremail, donatorimage } = card;


    return (
        <div>
            <div className="card w-96 h-[550px] rounded-none bg-base-100 shadow-md mx-auto">
                <figure><img src={image} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex items-center gap-3 my-5 mx-auto">
                        <img className="rounded-full h-12 w-12" src={donatorimage} alt="" />
                        <p className="font-semibold">{donatorname}</p>
                    </div>

                    <div className="text-center">
                        <p>{note}</p>
                        <p><span className="font-semibold">Food Quantity (gm):</span> {quantity}</p>
                        <p><span className="font-semibold">Pickup Locaton:</span> {location}</p>
                        <p><span className="font-semibold">Expired Time (days):</span> {expired}</p>
                    </div>

                    <div className="card-actions justify-center">
                        <Link to={`/food/${_id}`}><button className="btn bg-rose-200 text-rose-700">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;