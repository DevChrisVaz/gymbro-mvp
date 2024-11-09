import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { ICredentials } from "../../domain/entities/login.entity";
import { inject, injectable } from "tsyringe";

export interface AuthRemoteDataSource {
    login(credentials: ICredentials): Promise<APIResult<{ token: string }>>;
    refreshToken(): Promise<APIResult<{ token: string }>>;
}

@injectable()
export class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient
    ) { }

    login({ userName, password }: ICredentials): Promise<APIResult<{ token: string }>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/auth/users",
            {
                body: { userName, password }
            }
        )
    }

    refreshToken(): Promise<APIResult<{ token: string }>> {
        return this.apiRestClient.call(
            HttpMethod.PUT,
            "/auth/refresh-token",
            {}
        )
    }
}