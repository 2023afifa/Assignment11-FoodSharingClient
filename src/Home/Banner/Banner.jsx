const Banner = () => {
    return (
        <div>
            <div className="hero bg-gray-100">
                <div className="hero-content flex-col lg:flex-row gap-6 max-w-full">
                    <img src="https://i.ibb.co/CP7PpYs/banner.jpg" className="max-w-4xl rounded-lg shadow-lg" />
                    <div>
                        <h1 className="text-4xl text-amber-600 font-bold">Nourishing Communities,<br></br> One Heartfelt Share at a Time.</h1>
                        <p className="py-6 text-slate-500 text-sm">Welcome to ShareWithHeart, where kindness meets sustainability. Our platform is a community of caring individuals dedicated to reducing food waste and supporting those in need. Together, we are on a mission to make the world a better place by sharing surplus food with love and compassion. Join our community, share your heart, and be part of a movement that nourishes both the body and soul.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;