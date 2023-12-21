import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data);

    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-violet-100 to-red-200">

                <div className="w-full p-10 md:w-1/3 ">
                    
                    <div className="card shrink-0 w-full  shadow-2xl 
                    bg-gradient-to-r from-pink-500 to-red-400 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <h2 className="text-4xl font-bold text-center">Register Here</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors?.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors?.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors?.password && <span className="text-red-500">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-blue-500  to-violet-500">Register</button>
                                <h2>Does have account? Please <Link className="text-blue-500 hover:underline" to = '/login'>Login</Link></h2>
                            </div>
                        </form>
                        <div className="text-center mb-5">
                            <h3 className="text-lg font-bold pb-4">Or Sign In With</h3>
                            <button className="btn bg-gradient-to-r from-green-500  to-blue-500">GOOGLE</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;