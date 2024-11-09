import { inject, injectable } from "tsyringe";
import type { PlanRepository } from "../../domain/repositories/plan.repository";

@injectable()
export class FindBranchPlansUseCase {
    constructor(
        @inject("PlanRepository") private planRepository: PlanRepository
    ) { }

    async run(branchId: string) {
        let response = await this.planRepository.findBranchPlans(branchId);
        return response;
    }
}