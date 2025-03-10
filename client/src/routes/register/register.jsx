// import "./register.scss";
// import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// import apiRequest from "../../library/apiRequest.js";
// import { useState } from "react";

// // username:

// //   'josep'
// //  email:

// //   'josep@gmail.com'
// //  password:

// //   'josep101'

// function Register() {
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     const formData = new FormData(e.target);
//     const username = formData.get("username");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       const res = await apiRequest.post("/auth/register", {
//         username,
//         email,
//         password,
//       });
//       navigate("/login");
//       // console.log(res.data);
//     } catch (err) {
//       console.log(err);
//       setError(err.response.data.message);
//     } finally {
//       setIsLoading(false);
//     }

//     // console.log(username, email, password);
//   };
//   return (
//     <div className="register">
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <h1>Create an Account</h1>
//           <input name="username" type="text" placeholder="Username" />
//           <input name="email" type="text" placeholder="Email" />
//           <input name="password" type="password" placeholder="Password" />
//           <button disabled={isLoading}>Register</button>
//           {error && <span>{error}</span>}
//           <Link to="/login">Do you have an account?</Link>
//         </form>
//       </div>
//       <div className="imgContainer">
//         <img src="/bg.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Register;

import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../library/apiRequest.js";
import { useState } from "react";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await apiRequest.post("/auth/register", { username, email, password });
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      {/* Navbar */}
      {/* <div className="navbar">
        <Link to="/" className="logo">
          <span className="brandName">ReactEstate</span>
          <img
            src="/logo1.jpg"
            alt="ReactRealAgent Logo"
            className="logoImage"
          />
        </Link>
      </div> */}

      {/* Main Content */}
      <div className="contentContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <input name="email" type="email" placeholder="Email" required />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
            {error && <span>{error}</span>}
            <Link to="/login">Do you have an account?</Link>
          </form>
        </div>
        {/* <div className="imgContainer">
          <img src="/home.jpg" alt="Background" />
        </div> */}
      </div>
    </div>
  );
}

export default Register;
