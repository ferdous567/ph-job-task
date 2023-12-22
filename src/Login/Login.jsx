import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AutProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { signInWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
        signInWithEmail(data.email, data.password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: "Good job!",
                text: "Youre successfully Logged In!",
                icon: "success"
            });
            navigate(from, { replace: true });
        })

        .catch(err => {
            console.error(err)
        })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-violet-100 to-red-200">

                <div className="w-full p-10 md:w-1/3 ">
                    
                    <div className="card shrink-0 w-full  shadow-2xl 
                    bg-gradient-to-r from-pink-500 to-red-400 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <h2 className="text-4xl font-bold text-center">Login Here</h2>
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
                                <input className="btn bg-gradient-to-r from-blue-500  to-violet-500" type="submit" value="Login" />
                                
                                <h2>No any account? Please go to <Link className="text-blue-500 hover:underline " to = '/register'>Register</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;