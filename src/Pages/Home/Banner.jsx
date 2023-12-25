import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../AuthProvider/AuthProvider";

const Banner = () => {
    const {user}=useContext(myContext)
    return (
        <div className="mt-16 h-screen ">
          <div className="relative">
          <img className="w-[1366px] h-[600px] " src="https://i.ibb.co/72Pr33r/taskbanner.png" alt="" />
          
          </div>
          <div className="absolute bottom-[250px] left-[450px] bg-black bg-opacity-50 p-10">
          <p className=" text-4xl font-bold text-white text-center  ">Manage your task with <br /> our expertise</p>
            <div className="text-center mt-5">
                {
                    user?
                    <Link to={'/dashboard/profile'}> <button className="btn glass text-white">Explore</button></Link>:
                    <Link to={'/login'}> <button className="btn glass text-white">Explore</button></Link>

                }
           
            </div>
          </div>
         
        </div>
    );
};

export default Banner;