
import axios from "axios";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {


    const task = useLoaderData();
    const { _id, title, desc, priority, deadline } = task;
    console.log(task);

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const desc = form.description.value;
        const priority = form.priority.value;
        const deadline = form.deadline.value;

        const updatedTask = { title, desc, priority, deadline }
        console.log(updatedTask);
        axios.put(`https://task-mgmt-server.vercel.app/tasks/${_id}`, updatedTask)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Task Successfully Updated!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="w-full">
            <form onSubmit={handleUpdateCoffee} className="card-body  ">
                <h2 className="text-4xl font-bold text-center">Update Your Task : {title}</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="p-4" defaultValue={desc} name="description" placeholder="Task Description" cols="30" rows="5"></textarea>
                    {/* <input type="email" placeholder="email" className="input input-bordered"  /> */}
                    {/* {errors?.description && <span className="text-red-500">Description is required</span>} */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>

                    <select name="priority" defaultValue={priority} className="w-full p-2"  >
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="modarate">Modetate</option>
                        <option value="high">High</option>
                    </select>
                    {/* {errors?.priority && <span className="text-red-500">Priority is required</span>} */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadlines</span>
                    </label>
                    <input type="number" name="deadline" defaultValue={deadline} placeholder="Deadlines" className="input input-bordered"
                    />
                    {/* {errors?.deadlines && <span className="text-red-500">Deadlines is required</span>} */}

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-gradient-to-r from-blue-500  to-violet-500" type="submit" value="Submit Task" />
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;