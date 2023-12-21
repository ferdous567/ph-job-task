import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AutProvider";

const CreateTask = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const taskItem = {
            title: data.taskTitle,
            email: user?.email,
            desc: data.description,
            priority: data.priority,
            deadline: data.deadlines
        }
        console.log(taskItem);
        axios.post('http://localhost:5000/tasks', taskItem)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Task Successfully Added!",
                    icon: "success"
                });
            }
        })
    };
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
                <h2 className="text-4xl font-bold text-center">Create New Task</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" {...register("taskTitle", { required: true })} />
                    {errors?.taskTitle && <span className="text-red-500">Title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="p-4" placeholder="Task Description" {...register("description", { required: true })} cols="30" rows="5"></textarea>
                    {/* <input type="email" placeholder="email" className="input input-bordered"  /> */}
                    {errors?.description && <span className="text-red-500">Description is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>

                    <select  {...register("priority", { required: true })} className="w-full p-2"  >
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="modarate">Modetate</option>
                        <option value="high">High</option>
                    </select>
                    {errors?.priority && <span className="text-red-500">Priority is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadlines</span>
                    </label>
                    <input type="number" placeholder="Deadlines" className="input input-bordered"
                        {...register("deadlines", { required: true })} />
                    {errors?.deadlines && <span className="text-red-500">Deadlines is required</span>}
                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-gradient-to-r from-blue-500  to-violet-500" type="submit" value="Submit Task" />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;