import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import AvailableFood from "./AvailableFood";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {

    const [foodCards, setFoodCards] = useState([]);
    // const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allfood")
            .then(res => res.json())
            .then(data => setFoodCards(data))
    }, [])

    const handleSearch = () => {
        if (searchTerm === "") {
            setFoodCards(foodCards);
        }
        else {
            const filteredResults = foodCards.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            console.log(filteredResults);
            setFoodCards(filteredResults);
        }
    }

    const handleExpired = () => {
        const sortedData = [...foodCards];
        sortedData.forEach((food) => {
            food.expired = parseInt(food.expired, 10);
        });
        sortedData.sort((a, b) => a.expired - b.expired);
        setFoodCards(sortedData);
        setSorted(true);
    }

    return (
        <div>
            <Helmet>
                <title>ShareWithHeart | Available Foods</title>
            </Helmet>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold my-5">All Available Foods</h2>

            <div className="flex justify-between my-10 mx-20">
                <button onClick={handleExpired} className="btn text-rose-700">Sort by expired time</button>
                <div className="form-control">
                    <div className="input-group">
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Search by name…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 mb-10">
                {
                    foodCards.map(card => <AvailableFood key={card.id} card={card}></AvailableFood>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AvailableFoods;