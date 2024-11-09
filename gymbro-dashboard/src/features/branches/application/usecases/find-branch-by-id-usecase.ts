import { inject, injectable } from "tsyringe";
import { IBranch } from "../../domain/entities/branch.entity";
import type { BranchRepository } from "../../domain/repositories/branch.repository";

@injectable()
export class FindBranchByIdUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(branchId: string): Promise<IBranch> {
        let response: IBranch = await this.branchRepository.findById(branchId);
        return response;
    }
}