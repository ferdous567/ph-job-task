import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";
import { Link } from "react-router-dom";

const Profile = () => {

    const {user} = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);

    const url = `https://task-mgmt-server.vercel.app/tasks?email=${user.email}`;

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
            <h2 className="text-5xl text-center font-bold underline text-sky-600 my-10">My Profile</h2>
            <div className="flex justify-center items-center">
            <img className="mr-10 my-4 rounded-lg" src={user?.photoURL} alt="" />
            <div className="space-y-2">
                <h2><span className="text-lg font-bold">User Name :</span> {user?.displayName}</h2>
                <h4><span className="text-lg font-bold">Email :</span> {user?.email}</h4>
                <h3> <span className="text-lg font-bold">Total Created Task Items :</span> {tasks?.length}</h3>
                <Link to = '/dashboard'>
                <button className="btn btn-error btn-sm my-2">Show All Task Item</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Profile;