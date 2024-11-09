import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import { GYMRepository } from "@/features/gyms/domain/repositories/gym.repository";
import type { GYMRemoteDataSource } from "../data-sources/gym-remote-data-source";
import { inject, injectable } from "tsyringe";
import { IGYM } from "../../domain/entities/gym.entity";

@injectable()
export class GYMRepositoryImpl implements GYMRepository {
    constructor(
        @inject("GYMRemoteDataSource") private gymRemoteDataSource: GYMRemoteDataSource,
        // @inject("GYMLocalDataSource") private gymLocalDataSource: GYMLocalDataSource
    ) { }

    async register(registerGYMDto: RegisterGYMDto): Promise<any> {
        const response = await this.gymRemoteDataSource.register(registerGYMDto);

        switch (response.type) {
            case "Succeeded":
                console.log(response.data);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
        }
    }

    async getGYM(gymId: string): Promise<IGYM> {
        const response = await this.gymRemoteDataSource.findGYM(gymId);
        
        switch (response.type) {
            case "Succeeded":
                console.log(response.data);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
        }
    }

    // storeGYM(gym: IGYM): void {
    //     return this.gymLocalDataSource.saveGYM(gym);
    // }

    // getGYMFromStore(): IGYM | null {
    //     return this.gymLocalDataSource.getGYM();
    // }
}