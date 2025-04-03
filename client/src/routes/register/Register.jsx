import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import "./register.scss";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiTextBlock } from "react-icons/ri";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // Using Axios HTTP Cleint to do request
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_SERVER_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );

      navigate("/login");

      console.log(res.data.data.message);
    } catch (error) {
      console.log("Error message: ", error.response.data.data.message);
      console.log("Error in Register handleSubmit() function: ", error);
      setError(error.response.data.data.message);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
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
          {error && <span className="error">{error}</span>}
          <span>
            Already have an account? <Link to="/login"> Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
