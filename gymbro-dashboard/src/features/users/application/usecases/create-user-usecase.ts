import { inject, injectable } from "tsyringe";
import type { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDTO } from "../dto/create-user-dto";

@injectable()
export class CreateUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async run(createUserDTO: CreateUserDTO) {
        let response = await this.userRepository.createUser(createUserDTO);
        return response;
    }
}