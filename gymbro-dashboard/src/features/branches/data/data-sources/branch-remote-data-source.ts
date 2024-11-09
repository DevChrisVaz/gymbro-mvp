import { APIResult, type ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";
import { CreateBranchDto } from "../../application/dto/create-branch.dto";
import { IBranch } from "../../domain/entities/branch.entity";
import { inject, injectable } from "tsyringe";
import { IUser } from "@/features/users/domain/entities/user.entity";

export interface BranchRemoteDataSource {
    create(createBranchDto: CreateBranchDto): Promise<APIResult<void>>;
    find(): Promise<APIResult<IBranch[]>>;
    findById(branchId: string): Promise<APIResult<IBranch>>;
    findUsers(branchId: string): Promise<APIResult<IUser[]>>;
    update(branch: IBranch): Promise<APIResult<IBranch>>;
    delete(uuid: string): Promise<APIResult<IBranch>>;
    getCustomerSubscription(uuid: string, customerId: string): Promise<APIResult<any>>;
}

@injectable()
export class BranchRemoteDataSourceImpl implements BranchRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient
    ) { }

    create(createBranchDto: CreateBranchDto): Promise<APIResult<void>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/branches",
            {
                body: createBranchDto
            }
        )
    }

    find(): Promise<APIResult<IBranch[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/gym",
            {}
        )
    }

    findById(branchId: string): Promise<APIResult<IBranch>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/" + branchId,
            {}
        );
    }

    findUsers(branchId: string): Promise<APIResult<IUser[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/" + branchId + "/users",
            {}
        );
    }

    update(branch: IBranch): Promise<APIResult<IBranch>> {
        return this.apiRestClient.call(
            HttpMethod.PATCH,
            "/branches/" + branch.uuid,
            {
                body: branch
            }
        );
    }

    delete(uuid: string): Promise<APIResult<IBranch>> {
        return this.apiRestClient.call(
            HttpMethod.DELETE,
            "/branches/" + uuid,
            {}
        );
    }

    getCustomerSubscription(uuid: string, customerId: string): Promise<APIResult<any>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            `/branches/${uuid}/${customerId}/active`,
            {}
        );
    }
}