import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import AvailableFood from "./AvailableFood";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const AvailableFoods = () => {

    const [foodCards, setFoodCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [sorted, setSorted] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/allfood")
            .then(res => res.json())
            .then(data => setFoodCards(data))
    }, [])


    const allRequests = useLoaderData();
    const allRequest = allRequests.filter(request => request.status == "confirm");
    console.log(allRequest);


    // const remainingFoods = foodCards.map((foodCard) => {
    //     const matchCard = allRequest.find(card => card.foodId !== foodCard._id);
    //     console.log(matchCard);
    //     return matchCard;
    // });

    // console.log(remainingFoods);
    // setFoodCards(remainingFoods);


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

            <div className="flex justify-between my-10 mx-12">
                <div className="form-control">
                    <div className="input-group">
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Search by name…" className="input input-bordered border-2 border-amber-300" />
                        <button onClick={handleSearch} className="btn btn-square bg-amber-300 border-amber-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button onClick={handleExpired} className="btn normal-case rounded-sm text-amber-400 bg-transparent border-amber-300">Sort by expired time</button>
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