import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="card max-w-xl shadow-xl bg-rose-100 mt-20 mx-auto">
                <h2 className="text-center text-2xl text-rose-700 font-semibold pt-10">Register</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-200 text-rose-700">Register</button>
                    </div>
                </form>
            </div>
            <p className="my-10 text-center">If you already have an account <Link to="/login"><span className="text-rose-700 font-semibold">Login</span></Link> here</p>
            <Footer></Footer>
        </div>
    );
};

export default Signup;