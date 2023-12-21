
const Banner = () => {
    return (
        <div>
            <div className="hero h-[450px] " style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_5np_NkCRsMqsYtU3pDS7nirye9qQyz93w&usqp=CAU)'}}>
                <div className="hero-content flex-col  lg:flex-row-reverse ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtPmixKcnbEMspnbI4lXeFskHtEs5r-vy8Q&usqp=CAU" className=" rounded-lg shadow-2xl h-[300px] w-full pl-20" />
                    <div>
                        <h1 className="text-7xl pr-20 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-600 to-violet-500">Welcome!</h1>
                        <p className="py-6 text-white font-normal text-lg"> Explore task create, see, update and get task to our website. <br />
                            Please visit us and more explore to get service.</p>
                        <button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Explore More..</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;