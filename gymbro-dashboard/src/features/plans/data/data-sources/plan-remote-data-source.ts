import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { IPlan } from "../../domain/entities/plan.entity";
import { CreatePlanDto } from "../../application/dto/create-plan.dto";
import { inject, injectable } from "tsyringe";

export interface PlanRemoteDataSource {
    findPlans(): Promise<APIResult<IPlan[]>>;
    findBranchPlans(branchId: string): Promise<APIResult<IPlan[]>>;
    createPlan(createPlanDto: CreatePlanDto): Promise<APIResult<IPlan>>;
    update(plan: IPlan): Promise<APIResult<IPlan>>;
    delete(uuid: string): Promise<APIResult<IPlan>>;
}

@injectable()
export class PlanRemoteDataSourceImpl implements PlanRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient
    ) { }

    findPlans(): Promise<APIResult<IPlan[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/plans",
            {}
            // {
            //     body: { userName, password }
            // }
        )
    }

    findBranchPlans(branchId: string): Promise<APIResult<IPlan[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "plans/" + branchId,
            {}
            // {
            //     body: { userName, password }
            // }
        )
    }

    createPlan(createPlanDto: CreatePlanDto): Promise<APIResult<IPlan>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/plans",
            {
                body: createPlanDto
            }
        )
    }

    update(plan: IPlan): Promise<APIResult<IPlan>> {
        return this.apiRestClient.call(
            HttpMethod.PATCH,
            "/plans/" + plan.uuid,
            {
                body: plan
            }
        )
    }

    delete(uuid: string): Promise<APIResult<IPlan>> {
        return this.apiRestClient.call(
            HttpMethod.DELETE,
            "/plans/" + uuid,
            {}
        )
    }
}