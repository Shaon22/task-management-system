import { useContext } from "react";
import { myContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(myContext)
    return (
        <div>
            <h1 className="my-10 text-center text-2xl font-bold">Profile</h1>
            <div className="bg-[#FFFF] shadow-2xl w-[60%] mx-auto p-10 mt-10">
                <img className="w-40 mx-auto rounded-full" src={user.photoURL} alt="" />
                <h1 className="text-center">{user.displayName}</h1>
            </div>
        </div>
    );
};

export default Profile;