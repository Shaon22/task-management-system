import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Addtask from "../Dashboard/Addtask";
import AllTasks from "../Dashboard/AllTasks";
import Profile from "../Dashboard/Profile";
import EditTask from "../Dashboard/EditTask";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/addTask',
                element: <Addtask></Addtask>
            },
            {
                path: '/dashboard/allTasks',
                element: <AllTasks></AllTasks>
            },
            {
                path:'/dashboard/editTask/:id',
                element:<EditTask></EditTask>,
                loader:({params})=>fetch(`http://localhost:5000/tasks/${params.id}`)
            }
        ]
    }
])