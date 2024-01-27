import { useEffect, useState } from "react";
import FeaturedFood from "./FeaturedFood";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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
        <div className="bg-slate-50 pt-20">
            <h2 className="text-4xl text-rose-700 text-center uppercase font-bold ml-3 mb-6">Check Our <span className="italic">Premium</span> Plates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-10">
                {
                    firstSixItems.map(card => <FeaturedFood key={card.id} card={card}></FeaturedFood>)
                }
            </div>
            <div className="text-center pb-20">
                <Link to="/availablefood"><button className="btn bg-transparent border-none hover:bg-transparent">Show All <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;