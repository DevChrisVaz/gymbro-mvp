import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import { GYMRemoteDataSource } from "@/features/gyms/domain/contracts/gym-remote-datasource-contract";
import { GYMRepository } from "@/features/gyms/domain/repositories/gym.repository";

export class GYMRepositoryImpl implements GYMRepository {
    constructor(private readonly gymRemoteDataSource: GYMRemoteDataSource) { }

    async registerGYM(dto: RegisterGYMDto): Promise<string> {
        const response = await this.gymRemoteDataSource.register(dto);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

}