import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Github from "../component/sociallogin/github";
import GoogleLogin from "../component/sociallogin/googleLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (password === conPassword) {
      try {
        await createUserWithEmailAndPassword(email, password);
        toast.success("User created successfully!");
        await Navigate("/login");
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
    setEmail("");
    setPassword("");
    setConPassword("");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="container">
          <div className="heading">Register</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              className="input text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              className="input text-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="input text-gray-800"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
              required
            />

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <input value="Register" type="submit" className="login-button" />
          </form>
          <div className="social-account-container">
            <span className="title font-bold">Or Sign in with</span>
            <div className="social-accounts">
              <GoogleLogin />
              <Github />
              <button className="social-button twitter">
                <svg
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
            </div>
          </div>
          <span className="agreement">
            <p className="font-[16px]">
              Already have an account?<Link to="/login"> login</Link>
            </p>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
