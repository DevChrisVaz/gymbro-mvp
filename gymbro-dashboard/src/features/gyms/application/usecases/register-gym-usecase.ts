import { GYMRepository } from "../../domain/repositories/gym.repository";
import { RegisterGYMDto } from "../dto/RegisterGYM.dto";

export class RegisterGYMUseCase {
    constructor(private gymRepository: GYMRepository) { }

    async run(registerGYMDto: RegisterGYMDto): Promise<any> {
        return this.gymRepository.register(registerGYMDto);
    }
}