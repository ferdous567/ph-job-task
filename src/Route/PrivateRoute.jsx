import { useContext } from "react";
import { AuthContext } from "../Provider/AutProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className=" text-center items-center">
            
            <h2 className="text-xl font-bold ">
            <span className="loading loading-spinner loading-md mt-24 "></span>Loading...</h2>
        </div>
    }

     if(user){
        return children;
    }

    return <Navigate to = '/login' state={{from: location}} replace></Navigate>
};


export default PrivateRoute;