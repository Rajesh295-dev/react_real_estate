import { Outlet } from "react-router";
import "./layout.scss";
import Navbar from "../../component/navbar/Navbar";

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

export default Layout;
