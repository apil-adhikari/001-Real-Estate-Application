import { Link } from "react-router-dom";
import "./login.scss";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiTextBlock } from "react-icons/ri";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";

const Login = () => {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Login into your Account</h1>
          <div className="labelContainer">
            <label htmlFor="username">
              <IoPerson className="icon" />
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="labelContainer">
            <label htmlFor="email">
              <IoMail className="icon" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="labelContainer">
            <label htmlFor="password">
              <IoLockClosed className="icon" />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button>Login</button>
          <span>
            Don't have an account? <Link to="/register"> Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
