import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
   
    return (
        <div className="w-full h-full flex justify-evenly my-10 p-10">
           <div className="w-1/4 bg-slate-200 p-5 ">
           <div className=" p-2 mb-4 rounded-lg  bg-slate-300 hover:bg-slate-400 text-xl font-bold  ">
            <NavLink  to = '/dashboard'>Todo List</NavLink>
            </div> 
           <div className="p-2 mb-4 rounded-lg bg-slate-300  text-xl font-bold ">
            <NavLink to = '/dashboard/createTask'>Create New Task</NavLink>
            </div> 
           </div>
           <div className="w-3/4 bg-slate-100 p-10">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;