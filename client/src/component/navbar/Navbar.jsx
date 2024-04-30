import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav className="nav">
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt=""></img>
          <span> ReactEstate </span>
        </a>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Rajesh Gautam</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a>Sign In</a>
            <a className="register">Sing Up</a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active " : "menu"}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Agents</a>
          <a>Sign In</a>
          <a>Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
