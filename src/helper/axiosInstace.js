import axios from "axios";

const BASE_URL = "https://learningbackend-gugw.onrender.com/";

const axiosInstance = axios.create({
    headers: {
        
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;


export default axiosInstance;
