import { useContext } from "react";
import { NavLink} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import navLogo from '../assets/user.png'



const Navbar = () => {
    const link = <>
        <NavLink className={({ isActive }) => isActive ?
            'underline font-semibold text-sky-700' : 'mx-3'} to="/">
            Home</NavLink>
        <NavLink className={({ isActive }) => isActive ?
            'underline font-semibold text-sky-700' : 'mx-3'} to="/about">
            About</NavLink>
        <NavLink className={({ isActive }) => isActive ?
            'underline font-semibold text-sky-700' : 'mx-3'} to="/userProfile">
          My Profile</NavLink>
    </>
    const { user, userSignOut } = useContext(AuthContext)
    // console.log('user',user);

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden z-40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="text-sky-600 text-xl">Nature Odyssey</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {link}

                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user ?
                        <div className="flex items-center gap-3">
                            <img title={user?.displayName} className="W-[40px] h-[40px] rounded-full relative top-2" src={user?.photoURL} alt="" /> 
                            <button onClick={userSignOut}
                                className='py-2 px-6 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold  mt-3'>Logout</button>
                        </div>
                        :
                        <div className="flex items-center gap-3">
                            <img className="relative top-2" src={navLogo} alt="" />
                            <NavLink to='/private/login' className='py-1 px-6 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold  mt-3 cursor-pointer'>Login</NavLink>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;