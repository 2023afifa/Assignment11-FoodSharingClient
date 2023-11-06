import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-noto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;