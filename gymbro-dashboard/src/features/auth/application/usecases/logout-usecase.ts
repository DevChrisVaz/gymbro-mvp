import { inject, injectable } from "tsyringe";
import type { AuthRepository } from "../../domain/repositories/auth.repository";

@injectable()
export class LogoutUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) { }

    run(): boolean {
        return this.authRepository.logout()
    }
}