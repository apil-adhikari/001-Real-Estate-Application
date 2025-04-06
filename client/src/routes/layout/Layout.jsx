import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Layout = () => {
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

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  // if (currentUser) {
  //   return <Navigate to="/login" />;
  // }

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
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
