import axios from "axios";

const publicAxiosInstance = axios.create({
    baseURL: "https://gymbro-services.onrender.com/api/",
    // baseURL: "http://localhost:3001/api/",
    timeout: 15000
});

export default publicAxiosInstance;