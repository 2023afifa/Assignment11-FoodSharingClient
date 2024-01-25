import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-signika">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;