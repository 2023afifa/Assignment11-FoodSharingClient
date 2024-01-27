import Banner from "../Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import FeaturedFoods from "../../FeaturedFoods/FeaturedFoods";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import { Helmet } from "react-helmet";
import Success from "../Success/Success";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ShareWithHeart | Home</title>
            </Helmet>

            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <Success></Success>
            {/* <Gallery></Gallery> */}
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;