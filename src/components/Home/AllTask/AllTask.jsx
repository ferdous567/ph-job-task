import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTask = () => {
    const [tasks, setTasks] = useState([]);

    

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTasks(data)
            })
    }, [])
    return (
        <div className="text-center">
            <h3 className="text-4xl font-bold text-sky-600 underline text-center">All Task Item</h3>
            <div className="grid grid-cols-4 gap-6 my-6 w-2/3 mx-auto">
            {
                tasks?.map(task => <div className="py-2 px-4 border-2 shadow-md rounded 
                bg-gradient-to-l from-red-400 via-fuchsia-400 to-pink-400" key={task._id}>
                    <h2 className="font-bold text-xl">{task?.title}</h2>
                    <p className="text-justify">{task?.desc} 
                    <span className="font-bold">Type:</span> ({task?.priority})</p>
                    <p>Deadlines: {task?.deadline} day</p>
                    <button className="btn w-full btn-sm btn-primary ">Apply Task</button>
                </div>)
            }
            </div>
            <Link to = '/dashboard'>
                <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500
                my-4 ">Show Your Task Item</button>
                </Link>
        </div>
    );
};

export default AllTask;