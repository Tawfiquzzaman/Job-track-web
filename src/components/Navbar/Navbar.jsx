import React from "react";
import { Link, NavLink } from "react-router";
import userImg from '../../assets/userImg.png'
import navIcon from '../../assets/navIcon.png'
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  


    const links = <>
    <li className="text-white"><NavLink to='/'>Home</NavLink></li>
    <li className="text-white"><NavLink to='/jobs'>Jobs</NavLink></li>
    <li className="text-white"><NavLink to='/company'>Companies</NavLink></li>
    
    </>

  return (
    <div className="navbar bg-[#3973ac] shadow-sm ">      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Job <span><img className="w-8" src={navIcon} alt="" /></span>Track</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-8 mr-3" src={userImg} alt="" />
        <Link to='/auth/login'><button className="btn btn-primary text-black rounded-full">Log In</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
