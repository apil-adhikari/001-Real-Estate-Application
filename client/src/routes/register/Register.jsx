import { Link } from "react-router-dom";
import "./register.scss";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiTextBlock } from "react-icons/ri";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";

const Register = () => {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Create an Account</h1>
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
          <button>Register</button>
          <span>
            Already have an account? <Link to="/login"> Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
