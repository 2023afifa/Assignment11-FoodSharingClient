import Banner from "../Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import FeaturedFoods from "../../FeaturedFoods/FeaturedFoods";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <Footer></Footer>
        </div>
    );
};

export default Home;