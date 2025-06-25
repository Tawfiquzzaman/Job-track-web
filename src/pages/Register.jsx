import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    //console.log({ name, email, photo, password });

    const passwordErrors = [];
    if (password.length < 6) {
      passwordErrors.push("Password must be at least 6 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Password must contain an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Password must contain a lowercase letter.");
    }

    if (passwordErrors.length > 0) {
      alert(passwordErrors.join(" "));
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
        <h2 className="text-center text-xl py-4  text-white bg-[#3973ac]/70">
          Login Your Account
        </h2>
        <div className="card-body bg-[#3973ac]/70">
          <form onSubmit={handleRegister} action="">
            <fieldset className="fieldset flex flex-col gap-5">
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
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
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
