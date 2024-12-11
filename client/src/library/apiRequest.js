
import axios from "axios";

const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, // Access baseURL from .env
    withCredentials: true,
});

export default apiRequest;
