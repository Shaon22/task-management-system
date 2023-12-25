import { useForm } from "react-hook-form";
import { useContext } from "react";
import { myContext } from "../AuthProvider/AuthProvider";
import UseAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";

const Addtask = () => {
    const axiosPublic=UseAxios()
    const{user}=useContext(myContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const taskInfo={
            title:data.title,
            description:data.description,
            deadline:data.deadline,
            priority:data.priority,
            status:'To-do',
            email:user.email
        }
        axiosPublic.post('/tasks',taskInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Task added successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
            
             
        })
    }

    return (
        <div className="w-[50%] mx-auto mt-5">
            <h1 className="my-10 text-center text-2xl font-bold">Add New Task</h1>
            <form className="bg-[#FFFF] shadow-2xl p-5 space-y-5 " onSubmit={handleSubmit(onSubmit)}>
                
               <div>
                <label>Title</label>
               <input className="w-full p-2 outline-none border-2 rounded" {...register("title", { required: true })} />
                {errors.title && <span className="text-red-600">This field is required</span>}
               </div>
                
               <div>
                <label>Description</label>
                <input className="w-full p-2 outline-none border-2 rounded" {...register("description", { required: true })}/>
                {errors.description && <span className="text-red-600">This field is required</span>}
                
               </div>
               <div>
                <label>Deadline</label>
               <input type="date" className="w-full p-2 outline-none border-2 rounded" {...register("deadline", { required: true })} />
                {errors.deadline && <span className="text-red-600">This field is required</span>}
               </div>

               <div>
                <label>Priority</label><br />
                <select {...register("priority", { required: true })}>
                   <option value="high">High</option>
                    <option value="moderate">Moderate</option>
                    <option value="low">Low</option>
                </select>
               </div>

              <div className="text-center">
              <input className="btn btn-sm bg-gray-500 text-white " type="submit" />
              </div>
            </form>
        </div>
    );
};

export default Addtask;