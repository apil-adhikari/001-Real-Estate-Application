import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>ApilEstate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <>
            <Link className="user profileLink" to="/profile">
              <img
                src={currentUser.data.user.avatar || "/defaultImage.png"}
                alt={currentUser.data.user.username}
              />
              <div>
                <span className="notification">3</span>
                <span className="name">{currentUser.data.user.username}</span>
              </div>
              {/* <Link to="/profile" className="profileLink">
                Profile
              </Link> */}
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
          </>
        )}

        {/* Menu Icon */}
        <div className="menuIcon">
          <img
            src={open ? "./menu-close.png" : "menu.png"}
            alt="menu"
            onClick={() => setOpen((previousValue) => !previousValue)} // Switching back to opposite on click.
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
