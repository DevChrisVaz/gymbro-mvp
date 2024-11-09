import { APIResult, ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";

export interface GYMUserRemoteDataSource {
    getUsers(gymId: string): Promise<APIResult>;
}

export class GYMRemoteDataSourceImpl implements GYMUserRemoteDataSource {
    constructor(private apiRestClient: ApiRestClient) { }

    getUsers(gymId: string): Promise<APIResult> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            `/gyms/${gymId}/users`
        )
    }
}