import { inject, injectable } from "tsyringe";
import type { BranchRepository } from "../../domain/repositories/branch.repository";
import { IBranch } from "../../domain/entities/branch.entity";

@injectable()
export class UpdateBranchUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(branch: IBranch) {
        let response = await this.branchRepository.updateBranch(branch);
        return response;
    }
}