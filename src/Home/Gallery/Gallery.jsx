const Gallery = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-6">Our Recent Program</h2>
            <div className="grid lg:grid-cols-3 gap-10 mx-10 mb-10">
                <img src="https://i.ibb.co/cw5pbVf/gallery1.jpg" alt="" />
                <img src="https://i.ibb.co/GxnLkfR/gallery2.jpg" alt="" />
                <img src="https://i.ibb.co/Y87256v/gallery3.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;