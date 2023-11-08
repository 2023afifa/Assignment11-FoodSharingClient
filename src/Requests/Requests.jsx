import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Request from "./Request";

const Requests = () => {
    const requests = useLoaderData();

    return (
        <div>

            <Navbar></Navbar>

            <h2 className="text-center text-3xl font-semibold my-5">My Food Requests</h2>

            {
                requests.map(request => <Request key={request.id} request={request}></Request>)
            }

            <Footer></Footer>

        </div>
    );
};

export default Requests;