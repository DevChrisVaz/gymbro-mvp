import { inject, injectable } from "tsyringe";
import { CreatePlanDto } from "../../application/dto/create-plan.dto";
import { IPlan } from "../../domain/entities/plan.entity";
import { PlanRepository } from "../../domain/repositories/plan.repository";
import type { PlanRemoteDataSource } from "../data-sources/plan-remote-data-source";

@injectable()
export class PlanRepositoryImpl implements PlanRepository {
    constructor(
        @inject("PlanRemoteDataSource") private planRemoteDataSource: PlanRemoteDataSource
    ) { }

    async findPlans(): Promise<IPlan[]> {
        const response = await this.planRemoteDataSource.findPlans();

        switch (response.type) {
            case "Succeeded":
                // this.authLocalDataSource.saveToken(response.data.token);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async findBranchPlans(branchId: string): Promise<IPlan[]> {
        const response = await this.planRemoteDataSource.findBranchPlans(branchId);

        switch (response.type) {
            case "Succeeded":
                // this.authLocalDataSource.saveToken(response.data.token);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async createPlan(createPlanDto: CreatePlanDto): Promise<IPlan> {
        const response = await this.planRemoteDataSource.createPlan(createPlanDto);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async updatePlan(plan: IPlan): Promise<IPlan> {
        const response = await this.planRemoteDataSource.update(plan);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async deletePlan(uuid: string): Promise<IPlan> {
        const response = await this.planRemoteDataSource.delete(uuid);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }
}