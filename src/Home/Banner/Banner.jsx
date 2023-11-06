const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-50">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src="https://i.ibb.co/ggjz14S/banner.jpg" className="max-w-sm rounded-lg shadow-lg" />
                    <div className="">
                        <h1 className="text-4xl text-rose-800 font-bold">Nourishing Communities,<br /> One Heartfelt Share at a Time.</h1>
                        <p className="py-6 text-slate-500 text-sm">Welcome to ShareWithHeart, where kindness meets sustainability. Our platform is a community of caring individuals dedicated to reducing food waste and supporting those in need. Together, we are on a mission to make the world a better place by sharing surplus food with love and compassion. Join our community, share your heart, and be part of a movement that nourishes both the body and soul.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;