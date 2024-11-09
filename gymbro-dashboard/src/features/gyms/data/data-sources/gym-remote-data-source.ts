import { APIResult, type ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";
import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import { IGYM } from "../../domain/entities/gym.entity";
import { inject, injectable } from "tsyringe";

export interface GYMRemoteDataSource {
    findGYM(gymId: string): Promise<APIResult<IGYM>>;
    register(registerGYMDto: RegisterGYMDto): Promise<APIResult>;
}

@injectable()
export class GYMRemoteDataSourceImpl implements GYMRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient
    ) { }

    findGYM(gymId: string): Promise<APIResult<IGYM>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/gyms/" + gymId,
            {}
        )
    }

    register(registerGYMDto: RegisterGYMDto): Promise<APIResult> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/gyms",
            {
                body: registerGYMDto
            }
        )
    }
}