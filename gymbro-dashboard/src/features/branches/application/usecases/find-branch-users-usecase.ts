import { inject, injectable } from "tsyringe";
import type { BranchRepository } from "../../domain/repositories/branch.repository";

@injectable()
export class FindBranchUsersUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(branchId: string) {
        return await this.branchRepository.findUsers(branchId);
    }
}