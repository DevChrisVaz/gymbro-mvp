import { InternalAxiosRequestConfig } from "axios";

export const authorizationInterceptor = (token?: string) => {
    return (config: InternalAxiosRequestConfig) => {
        config.headers.Authorization = token;
        return config;
    }
}