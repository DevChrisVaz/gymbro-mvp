import { inject, injectable } from "tsyringe";
import type { BranchRepository } from "../../domain/repositories/branch.repository";
import { CreateBranchDto } from "../dto/create-branch.dto";

@injectable()
export class CreateBranchUseCase {
    constructor(
        @inject("BranchRepository") private branchRepository: BranchRepository
    ) { }

    async run(createBranchDto: CreateBranchDto) {
        let response = await this.branchRepository.create(createBranchDto);
        return response;
    }
}