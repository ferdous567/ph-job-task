
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-violet-100 to-red-200">

                <div className="w-full p-10 md:w-1/3 ">
                    
                    <div className="card shrink-0 w-full  shadow-2xl 
                    bg-gradient-to-r from-pink-500 to-red-400 ">
                        <form className="card-body">
                            <h2 className="text-4xl font-bold text-center">Login Here</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-blue-500  to-violet-500">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;