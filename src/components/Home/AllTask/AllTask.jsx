import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        fetch('https://task-mgmt-server.vercel.app/tasks')
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
                    tasks?.map(task => <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="py-4 px-4 border-2 shadow-md rounded-xl 
                bg-gradient-to-l from-red-400 via-fuchsia-400 to-pink-400" key={task._id}>
                        <h2 className="font-bold text-xl">{task?.title}</h2>
                        <p className="text-center">
                            <span className="font-bold ">Type:</span> ({task?.priority})</p>
                        <p><span className="font-bold ">Deadlines:</span> {task?.deadline} days</p>
                        <div className="py-2">
                            <button className="btn w-full btn-sm btn-primary btn-outline">Apply Task</button>
                        </div>
                    </div>)
                }
            </div>
            <Link to='/dashboard'>
                <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500
                my-4 ">Show Your Task Item</button>
            </Link>
        </div>
    );
};

export default AllTask;