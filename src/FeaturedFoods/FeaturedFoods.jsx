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

    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-6">Featured Foods</h2>
            <div className="grid lg:grid-cols-3 gap-10 mb-14">
                {
                    foodCards.map(card => <FeaturedFood key={card.id} card={card}></FeaturedFood>)
                }
            </div>
            <div className="text-center mb-20">
                <Link to="/availablefood"><button className="btn text-rose-700">Show All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;