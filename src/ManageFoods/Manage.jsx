const Manage = ({ allRequest }) => {
    const { myname, myemail, myimage, status } = allRequest;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-1/3 mx-auto">
                <figure><img className="h-40" src={myimage} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{myname}</h2>
                    <p>{myemail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Status</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;