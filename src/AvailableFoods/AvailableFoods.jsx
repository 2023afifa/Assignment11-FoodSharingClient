import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import AvailableFood from "./AvailableFood";

const AvailableFoods = () => {

    const [foodCards, setFoodCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allfood")
            .then(res => res.json())
            .then(data => setFoodCards(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold my-5">All Available Foods</h2>

            <div className="grid lg:grid-cols-3 gap-10 mb-10">
                {
                    // foodCards.map(card => <AvailableFood key={card.id} card={card}></AvailableFood>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AvailableFoods;