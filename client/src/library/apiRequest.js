
import axios from "axios";
console.log("Base URL:", import.meta.env.VITE_REACT_APP_BASE_URL);

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL, // Access baseURL from .env
    withCredentials: true,
});

export default apiRequest;
