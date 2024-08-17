import axios from "axios";

const BASE_URL = "https://learningbackend-gugw.onrender.com/";

const axiosInstance = axios.create({
    headers: {
        
        headers: {
        'Content-Type': 'application/json', // Ensure the content type is allowed by CORS policy
        'Authorization': 'Bearer YOUR_TOKEN', // If you're using authentication
        'X-Custom-Header': 'CustomHeaderValue', // Replace or remove this as needed
      },
      withCredentials: true, // Include credentials (cookies, etc.) if the API supports it);
    })
    }
});

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;


export default axiosInstance;
