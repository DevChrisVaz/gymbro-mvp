import { inject, injectable } from "tsyringe";
import type { UserRepository } from "../../domain/repositories/user.repository";

@injectable()
export class DeleteUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async run(uuid: string) {
        let response = await this.userRepository.deleteUser(uuid);
        return response;
    }
}