// import { autoInjectable } from "tsyringe";
import { ILoggedUser } from "@/features/auth/domain/entities/logged-user.entity";
import { ICredentials } from "../../domain/entities/login.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import type { AuthLocalDataSource } from "../data-sources/auth-local-data-source";
import type { AuthRemoteDataSource } from "../data-sources/auth-remote-data-source";
import { jwtDecode } from "jwt-decode";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        @inject("AuthRemoteDataSource") private authRemoteDataSource: AuthRemoteDataSource,
        @inject("AuthLocalDataSource") private authLocalDataSource: AuthLocalDataSource
    ) { }

    async login(credentials: ICredentials): Promise<ILoggedUser> {
        const response = await this.authRemoteDataSource.login(credentials);

        switch (response.type) {
            case "Succeeded":
                this.authLocalDataSource.saveToken(response.data.token);
                const loggedUser = jwtDecode<ILoggedUser>(response.data.token);
                this.authLocalDataSource.saveLoggedUser(loggedUser);
                return loggedUser;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async refreshToken(): Promise<string> {
        const response = await this.authRemoteDataSource.refreshToken();

        switch (response.type) {
            case "Succeeded":
                this.authLocalDataSource.saveToken(response.data.token);
                return response.data.token;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    logout(): boolean {
        this.authLocalDataSource.removeToken();
        this.authLocalDataSource.removeLoggedUser();
        return true;
    }

    getLoggedUser(): ILoggedUser | null {
        return this.authLocalDataSource.getLoggedUser();
    }
}