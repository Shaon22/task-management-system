import { Outlet } from "react-router-dom";
import Sidenav from "../Dashboard/Sidenav";

const DashboardLayout = () => {
    return (
        <div>
            <Sidenav></Sidenav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;