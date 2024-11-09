import { AuthLocalDataSourceImpl } from "@/features/auth/data/data-sources/auth-local-data-source";
import { AxiosError } from "axios";
import { redirect } from "react-router-dom";

export const notAuthorizedInterceptor = (error: AxiosError) => {
    if (error.status === 401){
        const authLocalDataSource = new AuthLocalDataSourceImpl()
        authLocalDataSource.removeToken();
        console.log(error);
        redirect("/login");
    }
    return Promise.reject(error);
}