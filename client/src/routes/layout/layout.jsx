import { Outlet, Navigate } from "react-router";
import "./layout.scss";
import Navbar from "../../component/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
    <div className="layout">
      {" "}
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Naviagte to="/login" />;
  } else {
    return (
      currentUser && (
        <div className="layout">
          {" "}
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            {" "}
            <Outlet />
          </div>
        </div>
      )
    );
  }
}

export { Layout, RequireAuth };
