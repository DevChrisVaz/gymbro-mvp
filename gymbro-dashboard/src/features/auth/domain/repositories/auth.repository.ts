import { ILoggedUser } from "@/features/auth/domain/entities/logged-user.entity";
import { ICredentials } from "../entities/login.entity";

export interface AuthRepository {
    login(credentials: ICredentials): Promise<ILoggedUser>;
    refreshToken(): Promise<string>;
    getLoggedUser(): ILoggedUser | null;
    logout(): boolean;
}