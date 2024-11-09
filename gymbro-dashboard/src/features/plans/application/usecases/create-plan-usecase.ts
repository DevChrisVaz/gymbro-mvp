import { CreatePlanDto } from "../dto/create-plan.dto";
import type { PlanRepository } from "../../domain/repositories/plan.repository";
import { IPlan } from "../../domain/entities/plan.entity";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreatePlanUseCase {
    constructor(
        @inject("PlanRepository") private planRepository: PlanRepository
    ) { }

    async run(createPlanDto: CreatePlanDto): Promise<IPlan> {
        return this.planRepository.createPlan(createPlanDto);
    }
}