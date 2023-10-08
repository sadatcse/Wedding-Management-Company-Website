import React from 'react';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from 'react-hot-toast';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success(`${user.displayName} logged out successfully`); 
      })
      .catch((error) => {
        toast.error('Logout failed. Please try again later.');
        console.error(error);
      });
  };
  
    const navlinks = <> 
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/service">Service</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/packages">Packages</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/register">Registration</NavLink></li>
    { user && <>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>}
    </>

    return (
        <div className="navbar bg-base-100 border-solid border-2 border-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navlinks}
                    </ul>
                </div>
                <div className="flex items-center">
            <img src="logo.png" alt="Company Logo"className="h-2/4 w-2/4 mr-2"/>

          </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className='me-2'>   
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                        <img src={user.photoURL} />
                        </div>
                        </label></div>
                      
                        <span>{user.displayName}</span>
                        <a onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign out</a>
                    </> 
                    : <NavLink><Link to="/login">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</button>
                    </Link></NavLink>
                }
                
            </div>
        </div>
    );
};

export default Navbar;


