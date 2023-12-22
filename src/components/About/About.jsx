
const About = () => {
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center text-pink-500 underline my-4">About DoTask.</h2>
            <div className=" w-full">
            <img className="text-center w-1/2 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYR46MLdS3eVnEW0DQev50bmejn_SQxiirw&usqp=CAU" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-center text-red-500 underline my-4">What is Task Management? </h3>
            <div className="my-4 text-lg">
                <p>Task management is the process of monitoring your projects tasks through their various stages from start to finish. This involves actively making decisions for your tasks to accommodate changes that can occur real-time, with your end goal being the successful completion of your tasks.</p>
                <p>
                Effective task management requires managing all aspects of a task, including its status, priority, time, human and financial-resources assignments, recurrence, dependency, notifications,etc. These can be lumped together broadly into the basic activities of task management.
                </p>
            </div>
        </div>
    );
};

export default About;