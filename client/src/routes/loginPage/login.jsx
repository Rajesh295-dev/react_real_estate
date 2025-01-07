// import apiRequest from "../../library/apiRequest.js";
// import "./login.scss";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext.jsx";

// function Login() {
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);
//     const formData = new FormData(e.target);
//     const username = formData.get("username");
//     const password = formData.get("password");

//     try {
//       const res = await apiRequest.post("/auth/login", {
//         username,
//         password,
//       });
//       updateUser(res.data);
//       // localStorage.setItem("user", JSON.stringify(res.data));
//       navigate("/");
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
//     <div className="login">
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <h1>Welcome back</h1>
//           <input
//             name="username"
//             required
//             minLength={3}
//             maxLength={20}
//             type="text"
//             placeholder="Username"
//           />
//           <input
//             name="password"
//             type="password"
//             required
//             placeholder="Password"
//           />
//           <button disabled={isLoading}>Login</button>
//           {error && <span>{error}</span>}
//           <Link to="/register">{"Don't"} you have an account?</Link>
//         </form>
//       </div>
//       <div className="imgContainer">
//         <img src="/bg.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Login;

import apiRequest from "../../library/apiRequest.js";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Login failed! Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      {/* Navbar */}
      <div className="navbar">
        <Link to="/" className="logo">
          <span className="brandName">ReactEstate</span>
          <img
            src="/logo1.jpg"
            alt="ReactRealAgent Logo"
            className="logoImage"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="contentContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Welcome Back</h1>
            <input
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            <button disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {error && <span>{error}</span>}
            <Link to="/register">Don't you have an account?</Link>
          </form>
        </div>
        {/* <div className="imgContainer">
          <img src="/bg.png" alt="Background" />
        </div> */}
      </div>
    </div>
  );
}

export default Login;
