import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-10">
            <div className="mb-20 ml-10">
                <Link to="/"><button className="btn bg-rose-200 text-rose-700">Go to Home</button></Link>
            </div>
            <img className="w-2/5 mx-auto" src="../../images/error.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;