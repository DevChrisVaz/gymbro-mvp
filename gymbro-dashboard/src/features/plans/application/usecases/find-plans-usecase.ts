import { inject, injectable } from "tsyringe";
import type { PlanRepository } from "../../domain/repositories/plan.repository";

@injectable()
export class FindPlansUseCase {
    constructor(
        @inject("PlanRepository") private planRepository: PlanRepository
    ) { }

    async run() {
        let response = await this.planRepository.findPlans();
        return response;
    }
}