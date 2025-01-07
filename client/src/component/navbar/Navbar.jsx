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
  // Function to close the menu
  const handleCloseMenu = () => {
    setOpen(false);
  };
  // const user = true;
  return (
    <nav className="nav">
      <div className="left">
        <Link href="" className="logo">
          <span> ReactEstate </span>
          <img src="/logo1.jpg" alt=""></img>
        </Link>
        <Link to="">Home</Link>
        {/* <Link to="/zillow">RapidAPI</Link> */}
        <Link to="/list">PropertyList</Link>
        <a>About</a>
        <a>Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <Link to="/profile">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            </Link>
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="signUp">
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

        {/* <div className={open ? "menu active " : "menu"}>
          <Link to="">Home</Link>
          <a href="">About</a>
          <Link to="/list">PropertyList</Link>
          <a to="/list">PropertyList</a>
          <a href="">Agents</a>
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div> */}

        <div className={open ? "menu active " : "menu"}>
          <Link to="" onClick={handleCloseMenu}>
            Home
          </Link>
          <Link to="/profile" onClick={handleCloseMenu}>
            Profile
          </Link>
          <Link to="/list" onClick={handleCloseMenu}>
            PropertyList
          </Link>
          <a href="" onClick={handleCloseMenu}>
            Agents
          </a>
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
