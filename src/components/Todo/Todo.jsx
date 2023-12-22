import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Todo = () => {

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    const url = `http://localhost:5000/tasks?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTasks(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete!",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/tasks/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task is deleted.",
                                icon: "success"
                            });
                            const remaining = tasks.filter(task => task._id !== id);
                            setTasks(remaining);
                        }

                        

                    });
            }

        });



    }

    return (
        <div>
            <h3 className="text-3xl mb-4 font-bold underline text-center">My All Task List</h3>
            <div className="flex justify-around w-full px-4">
                <div className="border w-1/3  p-4">
                    <h2 className="font-bold">Todo: {tasks.length}</h2>
                    {
                        tasks.map(item => <div className="p-4 border shadow-md" key={item._id}>
                            <h2 className=" font-bold">{item.title} ({item.priority})</h2>
                            <p className="text-justify">{item.desc}</p>
                            <p>  <span className="font-bold">Deadline:</span> {item.deadline} days.</p>
                            <div className="flex justify-end gap-2">
                                <button onClick={() => handleDelete(item._id)}
                                    className="btn btn-secondary btn-outline btn-sm">Delete</button>
                                <Link to = {`/dashboard/updateTask/${item._id}`}>
                                <button className="btn btn-info btn-outline btn-sm">Edit</button></Link>
                            </div>
                        </div>)
                    }
                    <div>

                    </div>
                </div>
                <div className="border w-1/3 font-bold p-4">
                    <h2 className="font-bold">Ongoing</h2>
                </div>
                <div className="border w-1/3 font-bold p-4">
                    <h2 className="font-bold">Complete</h2></div>

            </div>
        </div>
    );
};

export default Todo;