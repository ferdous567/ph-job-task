import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";
import axios from "axios";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
import SingleTask from "./SingleTask";
import {   useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { DragDropContext } from "react-beautiful-dnd";

const Todo = () => {

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    const [ongoing, setOngoing] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addTaskToOngoing(item._id),
        collect: (monitor) =>({
            isOver: !!monitor.isOver(),
        })
    }));

    const addTaskToOngoing = _id =>{
        console.log(_id);
       const taskList = tasks.filter(onTask => _id === onTask._id);
       setOngoing((ongoing) => [...ongoing, taskList[0]])
    }

    const url = `https://task-mgmt-server.vercel.app/tasks?email=${user.email}`;

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
                axios.delete(`https://task-mgmt-server.vercel.app/tasks/${id}`)
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
                <div className="md:flex justify-around w-full px-4">
                    <div className="border md:w-1/3  p-4">
                        <h2 className="font-bold">Todo: {tasks.length}</h2>
                        {
                            tasks.map(task => <SingleTask key={task._id} task={task}
                                handleDelete={handleDelete}></SingleTask>)
                        }
                        <div>

                        </div>
                    </div>
                    <div className="ongoing border md:w-1/3 font-bold p-4" ref={drop} >
                        <h2 className="font-bold">Ongoing</h2>
                        {
                            ongoing?.map((task, index) => <SingleTask key={index} task={task}
                                handleDelete={handleDelete}></SingleTask>)
                        }
                    </div>
                    <div className="border md:w-1/3 font-bold p-4" >
                        <h2 className="font-bold">Complete</h2>

                    </div>

                </div>
            </div>
        
    );
};



export default Todo;