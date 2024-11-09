import { RefreshTokenUseCase } from "@/features/auth/application/usecases/refresh-token-usecase";
import { AuthLocalDataSourceImpl } from "@/features/auth/data/data-sources/auth-local-data-source";
import { AuthRemoteDataSourceImpl } from "@/features/auth/data/data-sources/auth-remote-data-source";
import { InternalAxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";
import { AxiosApiRestClient } from "../../axios-implementation";
import publicAxiosInstance from "../../public-axios.config";
import { notAuthorizedInterceptor } from "../response/not-authorized.interceptor";
import { AuthRepositoryImpl } from "@/features/auth/data/repositories/auth.repository";

export const authorizationInterceptor = async (config: InternalAxiosRequestConfig) => {
    const token = new AuthLocalDataSourceImpl().getToken();
    if (token) {
        const { exp } = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (exp && exp < currentTime) {
            publicAxiosInstance.interceptors.request.use((publicConfig: InternalAxiosRequestConfig) => {
                publicConfig.headers.Authorization = "Bearer " + token;
                return publicConfig;
            }, notAuthorizedInterceptor);
            publicAxiosInstance.defaults.withCredentials = true;
            const axiosApiRestClient = new AxiosApiRestClient(publicAxiosInstance);
            const authRemoteDataSource = new AuthRemoteDataSourceImpl(axiosApiRestClient);
            const authLocalDataSource = new AuthLocalDataSourceImpl();
            const authRepository = new AuthRepositoryImpl(authRemoteDataSource, authLocalDataSource);
            const refreshTokenUseCase = new RefreshTokenUseCase(authRepository);
            const newToken = await refreshTokenUseCase.run();
            config.headers.Authorization = "Bearer " + newToken;
        } else {
            config.headers.Authorization = "Bearer " + token;
        }
    }
    return config;
}