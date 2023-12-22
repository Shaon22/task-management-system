import { NavLink } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="bg-orange-500 min-h-screen w-[20%] p-5 text-white">
            <ul>
                <li>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'underline' : '')}>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'underline' : '')}>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'underline' : '')}>Profile</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidenav;