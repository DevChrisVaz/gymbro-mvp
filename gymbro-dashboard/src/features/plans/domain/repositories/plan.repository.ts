import { CreatePlanDto } from "../../application/dto/create-plan.dto";
import { IPlan } from "../entities/plan.entity";

export interface PlanRepository {
    findPlans(): Promise<IPlan[]>;
    findBranchPlans(branchId: string): Promise<IPlan[]>;
    createPlan(createPlanDto: CreatePlanDto): Promise<IPlan>;
    updatePlan(plan: IPlan): Promise<IPlan>;
    deletePlan(uuid: string): Promise<IPlan>
}