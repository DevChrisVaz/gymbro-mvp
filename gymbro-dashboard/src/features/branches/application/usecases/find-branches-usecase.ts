import { inject, injectable } from "tsyringe";
import { IBranch } from "../../domain/entities/branch.entity";
import type { BranchRepository } from "../../domain/repositories/branch.repository";

@injectable()
export class FindBranchesUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(): Promise<IBranch[]> {
        let response: IBranch[] = await this.branchRepository.find();
        return response;
    }
}