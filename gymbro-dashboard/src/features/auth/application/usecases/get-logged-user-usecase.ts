import { inject, injectable } from "tsyringe";
import { ILoggedUser } from "../../domain/entities/logged-user.entity";
import type { AuthRepository } from "../../domain/repositories/auth.repository";

@injectable()
export class GetLoggedUserUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) { }

    run(): ILoggedUser {
        const loggedUser = this.authRepository.getLoggedUser();
        if (loggedUser) return loggedUser;
        throw new Error();
    }
}