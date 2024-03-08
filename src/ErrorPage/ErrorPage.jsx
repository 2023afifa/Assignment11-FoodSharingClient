import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img className="w-2/5 mx-auto" src="https://i.ibb.co/PmQ6J9V/5203172.jpg" alt="" />
            <div className="text-center">
                <Link to="/">
                    <button className="btn bg-transparent normal-case text-amber-500 underline border-none hover:bg-transparent hover:text-amber-600">Go Back To Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;