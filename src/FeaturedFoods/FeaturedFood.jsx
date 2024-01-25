import { Link } from "react-router-dom";

const FeaturedFood = ({ card }) => {
    const { _id, name, image, quantity, location, expired, note, donatorname, donatorimage } = card;

    return (
        <div>
            <div className="card w-[370px] h-[400px] image-full mx-auto">
                <figure><img src={image} alt="food" /></figure>
                <div className="card-body">
                    <div className="flex items-center gap-3 mb-5">
                        <img className="rounded-sm h-12 w-12" src={donatorimage} alt="" />
                        <p className="font-semibold">{donatorname}</p>
                    </div>

                    <div className="mb-5">
                        <h2 className="card-title text-2xl">{name}</h2>
                        <p>{note}</p>
                    </div>

                    <div>
                        <p><span className="font-semibold">Food Quantity (gm):</span> {quantity}</p>
                        <p><span className="font-semibold">Pickup Locaton:</span> {location}</p>
                        <p><span className="font-semibold">Expired Time (days):</span> {expired}</p>
                    </div>

                    <div className="card-actions justify-center mt-auto">
                        <Link to={`/food/${_id}`}><button className="btn bg-transparent border-none text-slate-100 text-xl hover:text-slate-900 hover:bg-transparent">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;