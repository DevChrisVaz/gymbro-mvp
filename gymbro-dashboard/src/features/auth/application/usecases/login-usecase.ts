import type { AuthRepository } from "../../domain/repositories/auth.repository";
import { ICredentials } from "../../domain/entities/login.entity";
import { inject, injectable } from "tsyringe";

@injectable()
export class LoginUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) { }

    async run(credentials: ICredentials) {
        let response = await this.authRepository.login(credentials);
        return response;
    }
}