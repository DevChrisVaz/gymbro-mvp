import type { AuthRepository } from "@/features/auth/domain/repositories/auth.repository";
import { inject, injectable } from "tsyringe";
import type { GYMRepository } from "../../domain/repositories/gym.repository";
import { ILoggedUser } from "@/features/auth/domain/entities/logged-user.entity";
import { IGYM } from "../../domain/entities/gym.entity";

@injectable()
export class FindUserGymUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository,
        @inject("GYMRepository") private gymRepository: GYMRepository
    ) { }

    async run(): Promise<IGYM> {
        const loggedUser: ILoggedUser | null = this.authRepository.getLoggedUser();
        if (loggedUser && loggedUser.gym) {
            const gym: IGYM = await this.gymRepository.getGYM(loggedUser.gym);
            // this.gymRepository.storeGYM(gym);
            return gym;
        }

        throw new Error();
    }
}