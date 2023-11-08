import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";

const ManageFoods = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    const cards = useLoaderData();
    const card = cards.filter(card => card.donatoremail === user.email);
    console.log(card);

    return (
        <div>

            <Helmet>
                <title>ShareWithHeart | Manage My Foods</title>
            </Helmet>

            <Navbar></Navbar>

            <h2 className="text-center text-3xl font-semibold my-5">Manage My Foods</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                card.map(c => <ManageFood key={c.id} c={c}></ManageFood>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageFoods;