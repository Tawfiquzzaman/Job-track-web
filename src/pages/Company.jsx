import React, { useState } from "react";
import compnayImg from "../assets/compnayImg.png";
import { Link } from "react-router";

const Company = ({ singleCompany }) => {
  const { name, location, jobs, industry, website} =
    singleCompany;
  const [showModal, setShowModal] = useState(false);

  const job = jobs && jobs.length > 0 ? jobs[0] : null;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={compnayImg} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          {job && (
            <>
              <p>
                <strong>Job Type:</strong>{" "}
                <button className="btn btn-soft btn-success h-8 rounded-full">
                  {job.jobType}
                </button>
              </p>
              <p>
                <strong>Salary:</strong>{" "}
                <span className="text-red-600">{job.salary}</span>
              </p>
            </>
          )}
          <div className="card-actions">
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-[#3973ac] text-white"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg relative">
            <button
              className="absolute top-2 right-4 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              {name} - Job Openings
            </h2>
            <p className="mb-2 text-gray-600">{location}</p>

            {jobs && jobs.length > 0 ? (
              jobs.map((jobItem, index) => (
                <div
                  key={index}
                  className="mb-6 border p-4 rounded-lg shadow-sm flex flex-col gap-5"
                >
                  <h3 className="text-xl font-semibold">{jobItem.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {jobItem.description}
                  </p>
                  <p className="mt-2">
                    <strong>Salary:</strong>{" "}
                    <span className="text-red-500">{jobItem.salary}</span>
                    <br />
                  </p>
                  <p>
                    <strong>Industry:</strong>{" "}
                    <span className="text-blue-500">{industry}</span>
                  </p>

                  <p>
                    <strong>Website:</strong>{" "}
                    <span className="text-blue-500">{website}</span>
                  </p>
                  <p>
                    <strong>Job Type:</strong> {jobItem.jobType}
                  </p>
                  <p>
                    <strong>Requirements:</strong>{" "}
                    <ol className="list-decimal list-inside text-sm text-gray-700">
                      {jobItem.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ol>
                  </p>
                  <Link to={website}><button className="btn bg-[#3973ac] mt-3 text-white">
                    Apply
                  </button></Link>
                </div>
              ))
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Company;
