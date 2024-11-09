import { inject, injectable } from "tsyringe";
import type { AuthRepository } from "../../domain/repositories/auth.repository";

@injectable()
export class RefreshTokenUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) { }

    async run() {
        let response = await this.authRepository.refreshToken();
        return response;
    }
}