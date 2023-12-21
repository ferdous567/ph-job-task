import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";

const Todo = () => {

    const {user} = useContext(AuthContext);
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
                            <p>  Deadline: {item.deadline} days.</p>
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