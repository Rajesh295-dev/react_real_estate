import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
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
        <a>Sign In</a>
        <a className="register">Sing Up</a>
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
