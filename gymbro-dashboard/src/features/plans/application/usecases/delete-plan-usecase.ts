import type { PlanRepository } from "../../domain/repositories/plan.repository";
import { IPlan } from "../../domain/entities/plan.entity";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeletePlanUseCase {
    constructor(
        @inject("PlanRepository") private planRepository: PlanRepository
    ) { }

    async run(uuid: string): Promise<IPlan> {
        return this.planRepository.deletePlan(uuid);
    }
}