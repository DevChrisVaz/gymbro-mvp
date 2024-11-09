import { IUser } from "@/features/users/domain/entities/user.entity";
import { CreateBranchDto } from "../../application/dto/create-branch.dto";
import { IBranch } from "../entities/branch.entity";

export interface BranchRepository {
    create(createBranchDto: CreateBranchDto): Promise<void>;
    find(): Promise<IBranch[]>;
    findById(branchId: string): Promise<IBranch>;
    findUsers(branchId: string): Promise<IUser[]>;
    updateBranch(branch: IBranch): Promise<IBranch>;
    deleteBranch(uuid: string): Promise<IBranch>;
    getCustomerSubscription(uuid: string, customerId: string): Promise<any>;
}