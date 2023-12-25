import { Link } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";
import Usetasks from "../Hooks/usetasks";
import Swal from "sweetalert2";

const AllTasks = () => {
    const axiosPublic = UseAxios()
    const [taskInfo, refetch] = Usetasks()
    const toDo = taskInfo.filter(item => item.status === 'To-do')
    const onGoing = taskInfo.filter(item => item.status === 'Ongoing')
    const completed = taskInfo.filter(item => item.status === 'Completed')

    const handleDelete = (id) => {
        axiosPublic.delete(`/tasks/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Task deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    }
    return (
        <div className="flex gap-5 p-5 justify-around bg-gray-100 min-h-screen m-5">
            <div className="flex-1"  >
                <h1 className="text-center text-xl font-semibold">To-Do</h1>
                <ul className="bg-[#FFFF] shadow-2xl p-10 min-h-screen rounded">
                    <li className="space-y-5">
                        {
                            toDo.map(item => <div key={item._id}>
                                <div className="bg-gray-200 p-5 ">
                                <h1>Title: {item.title}</h1>
                                    <p>Description: {item.description}</p>
                                    <h1>Deadline: {item.deadline}</h1>
                                    <h1>Priority: {item.priority}</h1>
                                </div>
                                <div className="space-x-5">
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    <Link to={`/dashboard/editTask/${item._id}`}><button>Edit</button></Link>
                                </div>
                            </div>)
                        }

                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <h1 className="text-center text-xl font-semibold">On going</h1>
                <ul className="bg-[#FFFF] shadow-2xl min-h-screen p-10 rounded">
                    <li>
                        {
                            onGoing.map(item => <div key={item._id}>
                                <div className="bg-gray-200 p-5 " >
                                    <h1>Title: {item.title}</h1>
                                    <p>Description: {item.description}</p>
                                    <h1>Deadline: {item.deadline}</h1>
                                    <h1>Priority: {item.priority}</h1>
                                </div>
                                <div className="space-x-5">
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    <Link to={`/dashboard/editTask/${item._id}`}><button>Edit</button></Link>
                                </div>
                            </div>)
                        }
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <h1 className="text-center text-xl font-semibold">Completed</h1>
                <ul className="bg-[#FFFF] shadow-2xl min-h-screen p-10 rounded">
                    <li>
                        {
                            completed.map(item => <div key={item._id}>
                                <div className="bg-gray-200 p-5 " >
                                <h1>Title: {item.title}</h1>
                                    <p>Description: {item.description}</p>
                                    <h1>Deadline: {item.deadline}</h1>
                                    <h1>Priority: {item.priority}</h1>
                                </div>
                                <div className="space-x-5">
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    <Link to={`/dashboard/editTask/${item._id}`}><button>Edit</button></Link>
                                </div>
                            </div>)
                        }

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AllTasks;