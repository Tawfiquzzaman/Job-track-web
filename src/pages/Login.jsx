import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // fixed incorrect import
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { googleSignIn, signIn, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const emailRef = useRef();

  // Handle email/password login
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess(false);
    setErrorMsg("");

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
      setErrorMsg(passwordErrors.join(" "));
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
        setSuccess(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setErrorMsg(error.message);
      });
  };

  // Google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle forget password
  const handleForgetPass = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        alert("Check your email to reset your password.");
      })
      .catch((error) => {
        console.error("Password reset error:", error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
        <h2 className="text-center text-xl py-4 text-white bg-[#3973ac]/70">
          Login Your Account
        </h2>
        <div className="card-body bg-[#3973ac]/70">
          <form onSubmit={handleLogIn} className="flex flex-col gap-5">
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <p className="text-purple-500 text-sm">
              Password must contain at least 6 characters, one uppercase, and one lowercase letter.
            </p>

            <a onClick={handleForgetPass} className="link link-hover text-white">
              Forgot password?
            </a>

            <p className="text-white text-sm">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-red-600 underline">
                Register
              </Link>
            </p>

            {/* ✅ Only this login button is used */}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>

          <div className="divider text-white">or</div>

          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>

          {errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
