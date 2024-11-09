import axios from "axios";
import { acceptHeaderInterceptor } from "./interceptors/accept-header.interceptor";
import { notAuthorizedInterceptor } from "./interceptors/response/not-authorized.interceptor";
import { authorizationInterceptor } from "./interceptors/request/authorization.interceptor";

export const acceptHeaderInterceptorId = axios.interceptors.request.use(acceptHeaderInterceptor);

const axiosInstance = axios.create({
    baseURL: "https://gymbro-services.onrender.com/api/",
    // baseURL: "http://localhost:3001/api/",
    timeout: 15000
});

axiosInstance.interceptors.request.use(authorizationInterceptor, notAuthorizedInterceptor);
axiosInstance.interceptors.response.use(null, notAuthorizedInterceptor);
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
