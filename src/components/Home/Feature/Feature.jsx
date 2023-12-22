
const Feature = () => {
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center text-pink-500 underline my-4">User Type Use This Website</h2>
            <p className="text-center text-xl mb-6 ">what type of people are using this website <br />and to whom this can be of benefit.</p>
            <div className="collapse collapse-arrow bg-base-200 mb-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Developers
                </div>
                <div className="collapse-content">
                    <p>The advantages of having a tasks management platform include: Increased productivity — helps individuals and teams stay organized and prioritize tasks, leading to increased productivity. It allows for the assignment of tasks to specific individuals, reducing the chances of tasks being overlooked or forgotten.Nov 18, 2023</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Corporate professionals
                </div>
                <div className="collapse-content">
                    <p>Task management systems help to improve communication by providing a centralized place for teams to discuss tasks and exchange information. Team members can also report on ongoing and completed tasks to their manager, who can analyze this information and make necessary adjustments.Dec 16, 2022</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Bankers
                </div>
                <div className="collapse-content">
                    <p>What are the benefits of task management system? <br />
                        Task management systems allow you to easily assess and analyze statistics to determine what works and what areas might need attention. Once you are aware of the trends, you will be able to develop an appropriate business strategy.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;