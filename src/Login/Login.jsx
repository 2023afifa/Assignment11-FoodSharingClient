import { Link, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="card max-w-xl shadow-xl bg-rose-100 mt-20 mx-auto">
                <h2 className="text-center text-2xl text-rose-700 font-semibold pt-10">Log In</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <Link to="/"><button className="btn bg-rose-200 text-rose-700">Login</button></Link>
                    </div>
                </form>
                <p className="text-center pb-8">Login with <span className="text-rose-700 font-semibold">Google</span> / <span className="text-rose-700 font-semibold">Github</span></p>
            </div>
            <p className="my-10 text-center">If you do not have any account <Link to="/signup"><span className="text-rose-700 font-semibold">Sign up</span></Link> here</p>
            <Footer></Footer>
        </div>
    );
};

export default Login;