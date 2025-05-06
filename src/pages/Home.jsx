import React from "react";
import bgImage from '../assets/bgImage.jpg'
import { Link } from "react-router";
import Company from "./Company";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg ">
          <h1 className="mb-5 text-5xl font-bold">Explore Thousands of Career Opportunities</h1>
          <p className="mb-5">
          "Discover thousands of job opportunities from leading companies across various industries. Whether you're just starting out or looking to take the next big step in your career, our platform makes it easy to search, apply, and connect with employers — all in one place."
          </p>
          <Link><button className="btn bg-[#3973ac] text-white rounded-full p-6">Explore Renowned Companies</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
