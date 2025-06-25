import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../components/Navbar/Navbar';


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
        <div className="flex justify-center items-center min-h-screen bg-[#f0f4f8]">
            
      <div className="card bg-base-100 w-full max-w-md shadow-xl p-5 rounded-xl">
        <h2 className="text-center text-xl py-4 bg-[#3973ac]/70 text-white">
          User Profile
        </h2>
        <div className="flex flex-col items-center gap-5">
          <img
            className="w-32 h-32 rounded-full border-4 border-[#3973ac]"
            src={user?.photoURL || "/path-to-default-avatar.jpg"}
            alt="User Avatar"
          />
          <div className="text-center text-lg">
            <p className="font-bold text-blue-700">Name: {user?.displayName || "N/A"}</p>
            <p>Email: {user?.email}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UserProfile;