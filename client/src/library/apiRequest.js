
import axios from "axios";
console.log("Base URL:", import.meta.env.VITE_REACT_APP_BASE_URL);

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL, // Access baseURL from .env
    withCredentials: true,
});

export default apiRequest;



// import axios from "axios";

// console.log("Base URL:", import.meta.env.VITE_REACT_APP_BASE_URL);

// const apiRequest = axios.create({
//     baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
//     withCredentials: true, // Include cookies in requests
// });

// // Add Authorization token to every request
// apiRequest.interceptors.request.use((config) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     // Access the token property
//     const token = user?.token;

//     console.log("token with api in apiRequest ", token)
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// export default apiRequest;



