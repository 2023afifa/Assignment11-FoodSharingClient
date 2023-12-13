import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // const [foodAdd, setFoodAdd] = useState([]);

    // useEffect(() => {
    //     fetch("https://food-share-server-three.vercel.app/user")
    //     .then(res => res.json())
    //     .then(data => setFoodAdd(data))
    // }, [])

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="mr-2" to="/availablefood">Available Foods</NavLink></li>
            <li><NavLink className="mr-2" to="/addfood">Add Food</NavLink></li>
            <li><NavLink className="mr-2" to="/managefood">Manage My Foods</NavLink></li>
            <li><NavLink to="/request">My Food Request</NavLink></li>
            <li><NavLink to="/note">Leave Notes</NavLink></li>
        </>

    return (
        <div>
            <div className="navbar bg-slate-50 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="h-8 md:h-14 mr-2" src={logo} alt="" />
                    <a className="normal-case text-xl md:text-3xl text-rose-500 font-bold">ShareWithHeart</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <span className="ml-1 mr-3 font-medium hidden md:block">{user.email}</span>
                                <button onClick={handleLogout} className="btn bg-rose-200 text-rose-700">Log Out</button>
                            </>
                            : <Link to="/login"><button className="btn bg-rose-200 text-rose-700">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;