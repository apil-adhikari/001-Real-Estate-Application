import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
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
        {user ? (
          <>
            <Link className="user profileLink">
              <img
                src="https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="User Image"
              />
              <div>
                <span className="notification">3</span>
                <span className="name">John Doe</span>
              </div>
              {/* <Link to="/profile" className="profileLink">
                Profile
              </Link> */}
            </Link>
          </>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
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
