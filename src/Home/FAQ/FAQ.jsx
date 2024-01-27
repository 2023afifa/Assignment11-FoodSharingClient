const FAQ = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-6">How Can We Help You?</h2>
            <div className="w-4/5 mx-auto mb-10 flex items-center gap-5">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/YPD2mh3/FAQ.jpg" alt="" />
                </div>
                <div className="w-1/2">
                    <div className="collapse collapse-plus bg-slate-50 border-2 border-amber-500">
                        <input type="radio" name="my-accordion-1" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How does the platform work for food donors?
                        </div>
                        <div className="collapse-content">
                            <p>This question can provide an overview of the process for individuals or organizations looking to donate surplus food through your platform.</p>
                        </div>
                    </div>
                    <br />
                    <div className="collapse collapse-plus bg-slate-50 border-2 border-amber-500">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            How can I request food assistance on the platform?
                        </div>
                        <div className="collapse-content">
                            <p>Explain how individuals in need can access and request surplus food items from donors using your platform.</p>
                        </div>
                    </div>
                    <br />
                    <div className="collapse collapse-plus bg-slate-50 border-2 border-amber-500">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            What types of food items are typically shared on the platform?
                        </div>
                        <div className="collapse-content">
                            <p>Provide information about the variety of food items available for sharing, which can help users understand the platform's offerings.</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default FAQ;