import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import navIcon from '../../assets/navIcon.png'

const Footer = () => {
  const links = (
    <>
      <li className="text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-white">
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li className="text-white">
        <NavLink to="/company">Companies</NavLink>
      </li>
    </>
  );
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex flex-col">
        <nav className="mx-auto mb-20">
            <a className="btn btn-ghost text-xl text-white">Job <span><img className="w-8" src={navIcon} alt="" /></span>Track</a>
        </nav>
      <nav className="flex list-none gap-6 mx-auto">{links}</nav>
      <nav className="mx-auto">
        <h6 className="footer-title mx-auto">Social</h6>
        <div className="flex gap-6">
        <a
          href="https://www.facebook.com/md.tawfiquzzaman.2024"
          className="link link-hover"
        >
          <FaFacebook
            color="#1877F2"
            size={25}
            className="bg-white rounded-full"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mdtawfiquzzaman/"
          className="link link-hover"
        >
          <FaLinkedin color="#0077B5" size={25} />
        </a>

        <a href="https://github.com/mrtopic3050" className="link link-hover">
          <FaGithub size={25} />
        </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
