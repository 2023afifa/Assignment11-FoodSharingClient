const FeaturedFood = ({ card }) => {
    const { _id, name, image, quantity, location, expired, note, status, donatorname, donatoremail, donatorimage } = card;

    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 image-full shadow-xl mx-auto">
                <figure><img src={image} alt="food" /></figure>
                <div className="card-body">
                    <div className="flex items-center gap-3">
                        <img className="rounded-full h-12 w-12" src={donatorimage} alt="" />
                        <p className="font-semibold">{donatorname}</p>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p>{note}</p>

                    <p><span className="font-semibold">Food Quantity (gm):</span> {quantity}</p>
                    <p><span className="font-semibold">Pickup Locaton:</span> {location}</p>
                    <p><span className="font-semibold">Expired Time (days):</span> {expired}</p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn bg-rose-200 text-rose-700">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;