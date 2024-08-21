import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../library/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if (currentUser) fetch();
  // const user = true;
  return (
    <nav className="nav">
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt=""></img>
          <span> ReactEstate </span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/zillow">Property List</Link>
        <a>About</a>
        <a>Contact</a>
        <a>Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sing Up
            </a>
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
