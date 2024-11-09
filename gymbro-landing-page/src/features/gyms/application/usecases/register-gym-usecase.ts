import { GYMRepository } from "../../domain/repositories/gym.repository";
import { RegisterGYMDto } from "../dto/RegisterGYM.dto";

export class RegisterGYMUseCase {
    constructor(private readonly gymRepository: GYMRepository) { }

    async run(dto: RegisterGYMDto): Promise<string> {
        return await this.gymRepository.registerGYM(dto);
    }
}