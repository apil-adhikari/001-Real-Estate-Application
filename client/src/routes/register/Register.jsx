import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";

import "./register.scss";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiTextBlock } from "react-icons/ri";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";
import apiRequest from "../../lib/apiRequest";

const Register = () => {
  const [error, setError] = useState("");

  // Setting loading state
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // Using Axios HTTP Cleint to do request
    try {
      const res = await apiRequest.post(`/auth/register`, {
        username,
        email,
        password,
      });

      navigate("/login");

      console.log(res.data.data.message);
    } catch (error) {
      console.log("Error message: ", error.response.data.data.message);
      console.log("Error in Register handleSubmit() function: ", error);
      setError(error.response.data.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>

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
          <button disabled={handleSubmit}>Register</button>
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
