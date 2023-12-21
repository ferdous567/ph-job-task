import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AutProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <h2 className="text-4xl font-extrabold bg-clip-text text-transparent  bg-gradient-to-r
                     from-red-500 via-fuchsia-500 to-pink-700">DoTask.</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to = '/login' className="btn bg-gradient-to-r from-violet-500
                     to-fuchsia-500">Login</Link> */}
                    {
                        user ? <div>
                            <div className="dropdown dropdown-end">

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div >

                                </label>

                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-xl dropdown-content bg-base-100 rounded-box w-[250px]">
                                    <Link to='/profile'><li className="p-2 hover:text-blue-600 font-bold hover:underline">See Your Profile</li></Link>
                                    <li className="p-2">{user?.displayName}</li>
                                    <li className="p-2">{user?.email}</li>

                                    <button onClick={handleLogout} className="btn btn-outline btn-sm btn-success w-full">Log Out</button>

                                </ul>

                            </div>
                        </div> : <Link to='/login'>
                            <button className="btn bg-gradient-to-r from-violet-500
                     to-fuchsia-500 font-bold mx-5">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;