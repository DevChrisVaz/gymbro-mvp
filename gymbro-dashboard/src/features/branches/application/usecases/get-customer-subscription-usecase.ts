import { inject, injectable } from "tsyringe";
import { type BranchRepository } from "../../domain/repositories/branch.repository";

@injectable()
export class GetCustomerSubscriptionUseCase {
    constructor(
        @inject("BranchRepository") private readonly branchRepository: BranchRepository
    ) { }

    async run(branchId: string, customerId: string): Promise<any> {
        let response = await this.branchRepository.getCustomerSubscription(branchId, customerId);
        return response;
    }
}