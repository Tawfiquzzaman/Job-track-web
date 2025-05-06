import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
        <h2 className="text-center text-xl py-4  text-white bg-[#3973ac]/70">
          Login Your Account
        </h2>
        <div className="card-body bg-[#3973ac]/70">
          <fieldset className="fieldset flex flex-col gap-5">
          <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="Photo URL" />

            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <div>
              <p>
                Already Have an Account?{" "}
                <Link to="/auth/login">
                  <span className="text-red-600">Login</span>
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;