import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";


const SingleTask = ({task, handleDelete}) => {

    const {title, desc, _id, priority, deadline} = task;

    const [{isDragging}, drag] = useDrag(() => ({
        type: "task",
        item: {_id: _id},
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div className="p-4 border shadow-md " ref={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}>
                            <h2 className=" font-bold">{title} ({priority})</h2>
                            <p className="text-justify">{desc}</p>
                            <p>  <span className="font-bold">Deadline:</span> {deadline} days.</p>
                            <div className="flex justify-end gap-2">
                                <button onClick={() => handleDelete(_id)}
                                    className="btn btn-secondary btn-outline btn-sm">Delete</button>
                                <Link to = {`/dashboard/updateTask/${_id}`}>
                                <button className="btn btn-info btn-outline btn-sm">Edit</button></Link>
                            </div>
                        </div>
    );
};

export default SingleTask;