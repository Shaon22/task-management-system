import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../AuthProvider/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";



const Navbar = () => {
  const { user, logOut } = useContext(myContext)
  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const navlinks =
  
    <>
      <div className="space-x-10 text-lg text-white font-medium">
        {
          user?
          <> 
          <NavLink className={({ isActive }) => (isActive ? ' font-medium' : '')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? '' : '')} to="/addProducts">About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? '' : '')} to={`/myCart`}>Contact</NavLink>
        <NavLink className={({ isActive }) => (isActive ? '' : '')} to={`/dashboard/profile`}>Dashboard</NavLink>
          </>:
          <>
          <NavLink className={({ isActive }) => (isActive ? ' font-medium' : '')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? '' : '')} to="/addProducts">About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? '' : '')} to={`/myCart`}>Contact</NavLink>
          </>
        }
       
      </div>
    </>
  return (
    <div className="navbar bg-black bg-opacity-50  z-10 fixed top-0">
      <div className="navbar-start">
        <h1 className="text-3xl text-white font-medium">TASKMA<span className="text-orange-500">N</span></h1>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-teal-950 rounded-box w-52">
            {
              navlinks
            }
          </ul>
        </div>
       <img className="w-[150px] h-[5np0px]" src="" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navlinks
          }
        </ul>
      </div>
      <div className="navbar-end mr-5">
        {
          user?
          <>
           <h1 className="text-white mr-5">{user.displayName}</h1>
                            <img className="w-6 h-6 text-center rounded-full mr-4" src={user.photoURL} alt="" />
          <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to={'/'}><button onClick={handleLogOut} className="btn btn-sm border-none bg-red-600 text-white" >log Out</button></NavLink>
          </>
          :
          <>
          <div className="mr-4 bg-gray-400 w-6 h-6 rounded-full text-white"><AiOutlineUser className="text-2xl"></AiOutlineUser></div> 
          <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to={'/login'}><button className="btn btn-sm border-none bg-orange-500 text-white">login <FiLogIn></FiLogIn> </button></NavLink>
          </>
        }
       
        </div>
    </div>
  );
};

export default Navbar;