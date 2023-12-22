
const Contact = () => {
    return (
        <div>
             <h2 className="text-4xl font-bold text-center text-pink-500 underline my-4">Contact Us</h2>

             <div className="flex gap-6 justify-center my-10">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FA_l8uBkAkm_bcmgCEQwizA83Acb24t2ng&usqp=CAU" alt="" />
                </div>
                <div>
                    <h1 className="text-red-400 text-xl font-bold underline my-3">Get On Tuch..</h1>
                    <h2><span className="text-lg font-bold">Address: </span> Dhaka, Bangladesh.</h2>
                    <h2><span className="text-lg font-bold">Contact No: </span> 0184-000000</h2>
                    <h2><span className="text-lg font-bold">Email: </span> info@example.com</h2>
                </div>
             </div>
        </div>
    );
};

export default Contact;