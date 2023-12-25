import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">
           
                <div className="bg-gray-500 min-h-screen w-[20%] p-5 text-lg text-white font-medium">
                    <ul>
                        <li>
                            <NavLink to={'/dashboard/profile'} className={({ isActive }) => (isActive ? 'underline' : '')}>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/addTask'} className={({ isActive }) => (isActive ? 'underline' : '')}>Add Task</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/allTasks'} className={({ isActive }) => (isActive ? 'underline' : '')}>All Tasks</NavLink>
                        </li>
                    </ul>
                    <hr className="my-10" />
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'underline' : '')}>Home</NavLink>
                </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;