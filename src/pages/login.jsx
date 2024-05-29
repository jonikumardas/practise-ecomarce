import Github from "../component/sociallogin/github";
import GoogleLogin from "../component/sociallogin/googleLogin";
import "../sharedCss/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* impu section start */}
        <div className="container">
          <div className="heading">Sign In</div>
          <form className="form" action="">
            <input
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              className="input"
              required
            />
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              className="input"
              required
            />
            <span className="forgot-password">
              <Link to="#">Forgot Password ?</Link>
            </span>
            <input value="Sign In" type="submit" className="login-button" />
          </form>
          <div className="social-account-container">
            <span className="title font-bold">Or Sign in with</span>
            <div className="social-accounts">
             <GoogleLogin/>
              <Github></Github>
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
              Don't have account <Link to="/register">Register</Link>
            </p>
          </span>
        </div>
        {/* login section  */}
      </div>
    </div>
  );
};

export default Login;
