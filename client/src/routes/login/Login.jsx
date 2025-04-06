import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiTextBlock } from "react-icons/ri";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";
// import axios from "axios";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Initally setting isLoading to false

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // As soon as the button is clicked, we set to loading to true
    setError("");
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post(`/auth/login`, {
        email,
        password,
      });

      // SETTING LOCAL STORAGE (local storage sotres the data in string format, so we need to stringify the data)
      // localStorage.setItem("user", JSON.stringify(res.data));
      // We set local storage using our context api
      updateUser(res.data);

      navigate("/");
    } catch (error) {
      console.log("Error message: ", error.response.data.data.message);
      console.log("Error in Login handleSubmit() function : ", error);
      setError(error.response.data.data.message);
    } finally {
      setIsLoading(false); // Finally, we set isLoading to false
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Login into your Account</h1>

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
          <button disabled={isLoading}>Login</button>
          {error && <span className="error">{error}</span>}
          <span>
            Don't have an account? <Link to="/register"> Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
