import { inject, injectable } from "tsyringe";
import type { UserRepository } from "../../domain/repositories/user.repository";

@injectable()
export class FindUsersUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async run() {
        let response = await this.userRepository.findUsers();
        return response;
    }
}