import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        {/* Displays the children from router in App.jsx */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
