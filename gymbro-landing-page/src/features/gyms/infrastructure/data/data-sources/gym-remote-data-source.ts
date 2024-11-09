import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import { GYMRemoteDataSource } from "@/features/gyms/domain/contracts/gym-remote-datasource-contract";
import { APIResult, ApiRestClient, HttpMethod } from "@/core/domain/contracts/datasources/api-rest-client";

export class GYMRemoteDataSourceImpl implements GYMRemoteDataSource {
    constructor(private apiRestClient: ApiRestClient) { }

    register(dto: RegisterGYMDto): Promise<APIResult<string>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/gyms",
            {
                body: dto
            }
        )
    }
}