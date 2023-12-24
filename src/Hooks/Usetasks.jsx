import { useContext } from "react";
import UseAxios from "./UseAxios";
import { myContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Usetasks = () => {
    const axiosPublic=UseAxios()
    const {user,loading}=useContext(myContext)
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
    const {refetch, data: taskInfo = [] } = useQuery({
        queryKey: ['tasks',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`)
            return res.data
        }
    })
    return [taskInfo,refetch]
};

export default Usetasks;