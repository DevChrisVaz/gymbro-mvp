import { APIResult } from "@/core/domain/contracts/datasources/api-rest-client";
import { RegisterGYMDto } from "../../application/dto/RegisterGYM.dto";

export interface GYMRemoteDataSource {
    register(dto: RegisterGYMDto): Promise<APIResult<string>>;
}