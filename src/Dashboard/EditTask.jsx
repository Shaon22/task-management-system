import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";

const EditTask = () => {
    const axiosPublic=UseAxios()
    const taskInfo=useLoaderData()
    const {_id,title,description,deadline,priority,status}=taskInfo
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{
        const updatedInfo={
            title:data.title,
            description:data.description,
            deadline:data.deadline,
            priority:data.priority,
            status:data.status
           
        }
axiosPublic.patch(`/tasks/${_id}`,updatedInfo)
.then(res=>{
    console.log(res.data)
})
    }

    return (
        <div className="w-[50%] mx-auto mt-5">
            <h1 className="my-10 text-center text-2xl font-bold">Edit Task</h1>
            <form className="bg-[#FFFF] shadow-2xl p-5 space-y-5 " onSubmit={handleSubmit(onSubmit)}>
                
               <div>
                <label>Title</label>
               <input className="w-full p-2 outline-none border-2 rounded" {...register("title", { required: true })} defaultValue={title} />
                {errors.title && <span className="text-red-600">This field is required</span>}
               </div>
                
               <div>
                <label>Description</label>
                <input className="w-full p-2 outline-none border-2 rounded" {...register("description", { required: true })} defaultValue={description}/>
                {errors.description && <span className="text-red-600">This field is required</span>}
                
               </div>
               <div>
                <label>Deadline</label>
               <input type="date" className="w-full p-2 outline-none border-2 rounded" {...register("deadline", { required: true })} defaultValue={deadline}/>
                {errors.deadline && <span className="text-red-600">This field is required</span>}
               </div>

               <div>
                <label>Priority</label><br />
                <select {...register("priority", { required: true })} defaultValue={priority}>
                   <option value="high">High</option>
                    <option value="mordarate">Mordarate</option>
                    <option value="low">Low</option>
                </select>
               </div>

               <div>
               <label>Status</label><br />
                <select {...register("status", { required: true })} defaultValue={status} >
                    
                   <option value="To-do">To-do</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
               </div>

              <div className="text-center">
              <input className="btn btn-sm bg-gray-500 text-white " type="submit" />
              </div>
            </form>
        </div>
    );
};

export default EditTask;