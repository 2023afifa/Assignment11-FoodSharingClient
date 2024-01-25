import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-robotocon">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;