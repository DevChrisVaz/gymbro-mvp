import { inject, injectable } from "tsyringe";
import type { UserRepository } from "../../domain/repositories/user.repository";
import { IUser } from "../../domain/entities/user.entity";

@injectable()
export class UpdateUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async run(user: IUser) {
        let response = await this.userRepository.updateUser(user);
        return response;
    }
}