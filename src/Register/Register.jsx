import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AutProvider";
import Swal from "sweetalert2";



const Register = () => {

    const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const hanldeGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Youre successfully Logged In!",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                .then(() => console.log('user updated'))
                Swal.fire({
                    title: "Good job!",
                    text: "Registration succesfully please login!",
                    icon: "success"
                });
                navigate('/login');
            })
            .catch(error => console.error(error.message));
    };

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
                                {errors?.email && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors?.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-500">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true, maxLength: 20, minLength: 6,
                                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                                    })} />
                                {errors?.password?.type === 'minLength' && <span className="text-red-500">Password is must 6 character</span>}
                                {errors?.password?.type === 'pattern' && <span className="text-red-500">Password is must have one uppercase
                                    , one lowercase, one number and a special character.</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-blue-500  to-violet-500" type="submit" value="Register" />
                                
                                <h2>Does have account? Please <Link className="text-blue-500 hover:underline" to='/login'>Login</Link></h2>
                            </div>
                        </form>
                        <div className="text-center mb-5">
                            <h3 className="text-lg font-bold pb-4">Or Sign In With</h3>
                            <button onClick={hanldeGoogleSignIn} className="btn bg-gradient-to-r from-green-500  to-blue-500">GOOGLE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;