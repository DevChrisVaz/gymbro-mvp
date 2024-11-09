import { inject, injectable } from "tsyringe";
import type { BranchRepository } from "../../domain/repositories/branch.repository";

@injectable()
export class DeleteBranchUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(uuid: string) {
        let response = await this.branchRepository.deleteBranch(uuid);
        return response;
    }
}