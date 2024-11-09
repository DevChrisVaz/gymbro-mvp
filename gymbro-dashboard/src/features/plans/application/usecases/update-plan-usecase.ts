import type { PlanRepository } from "../../domain/repositories/plan.repository";
import { IPlan } from "../../domain/entities/plan.entity";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdatePlanUseCase {
    constructor(
        @inject("PlanRepository") private planRepository: PlanRepository
    ) { }

    async run(plan: IPlan): Promise<IPlan> {
        return this.planRepository.updatePlan(plan);
    }
}