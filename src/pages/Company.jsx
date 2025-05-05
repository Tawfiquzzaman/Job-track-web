import React from "react";
import compnayImg from '../assets/compnayImg.png'

const Company = ({ singleCompany }) => {

    const {logo, name, location} = singleCompany;
  

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={compnayImg}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {location}
        </p>
        <div className="card-actions">
          <button className="btn bg-[#3973ac] text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Company;
