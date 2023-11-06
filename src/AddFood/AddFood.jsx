import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const AddFood = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-50 my-20">
                <div className="lg:flex gap-16 items-center mb-14 lg:mx-40">
                    <img className="w-96 mx-auto" src="https://i.ibb.co/X2wfFXG/addfood.jpg" alt="" />
                    <p className="text-xl italic">Our platform is a community of caring individuals dedicated to reducing food waste and supporting those in need. Together, we are on a mission to make the world a better place by sharing surplus food with love and compassion. Join our community, share your heart, and be part of a movement that nourishes both the body and soul. Every contribution, no matter how small, makes a significant impact in the fight against hunger and food waste. Together, we are changing lives, one heartfelt share at a time. Explore, connect, and spread the love with ShareWithHeart.</p>
                </div>
                <form className="px-40">
                    <div>
                        <div className="mx-auto">
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter food name" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter food image" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter food quantity" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter pickup location" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter expired date" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter additional notes" className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <input type="text" name="name" defaultValue="Available" placeholder="Enter food status" className="input w-1/2" />
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Add Food" className="btn text-rose-700 bg-rose-200" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddFood;