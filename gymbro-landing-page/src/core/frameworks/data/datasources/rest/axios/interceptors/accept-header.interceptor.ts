import { InternalAxiosRequestConfig } from "axios";

export const acceptHeaderInterceptor = (config: InternalAxiosRequestConfig) => {
    config.headers.Accept = "application/json";
    return config;
}