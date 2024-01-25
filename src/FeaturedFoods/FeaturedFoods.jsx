import { useEffect, useState } from "react";
import FeaturedFood from "./FeaturedFood";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [foodCards, setFoodCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allfood")
            .then(res => res.json())
            .then(data => setFoodCards(data))
    }, [])

    const sortedData = [...foodCards].sort((a, b) => b.quantity - a.quantity);

    const firstSixItems = sortedData.slice(0, 4);

    return (
        <div>
            <h2 className="text-2xl text-rose-700 uppercase font-bold ml-3 mb-6">Our Premium Plates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-14">
                {
                    firstSixItems.map(card => <FeaturedFood key={card.id} card={card}></FeaturedFood>)
                }
            </div>
            <div className="text-center mb-20">
                <Link to="/availablefood"><button className="btn text-rose-700">Show All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;