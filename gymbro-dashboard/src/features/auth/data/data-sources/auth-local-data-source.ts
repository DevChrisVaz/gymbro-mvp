import { store } from "@/core/data/frameworks/datasources/local/redux/store";
import { rmLoggedUser, rmToken, setLoggedUser, setToken } from "../../infrastructure/redux/auth.slice";
import { ILoggedUser } from "../../domain/entities/logged-user.entity";
import { injectable } from "tsyringe";

export interface AuthLocalDataSource {
    saveToken(token: string): void;
    getToken(): string | null;
    removeToken(): void;
    saveLoggedUser(loggedUser: ILoggedUser): void;
    getLoggedUser(): ILoggedUser | null;
    removeLoggedUser(): void;
}

@injectable()
export class AuthLocalDataSourceImpl implements AuthLocalDataSource {
    saveToken(token: string) {
        store.dispatch(setToken(token));
    }

    getToken(): string | null {
        const currentState = store.getState();
        return currentState.auth.token;
    }

    removeToken(): void {
        store.dispatch(rmToken());
    }

    saveLoggedUser(loggedUser: ILoggedUser): void {
        store.dispatch(setLoggedUser(loggedUser));
    }

    removeLoggedUser(): void {
        store.dispatch(rmLoggedUser());
    }

    getLoggedUser(): ILoggedUser | null {
        const currentState = store.getState();
        return currentState.auth.loggedUser;
    }
}