import { CreateBranchDto } from "./create-branch.dto";

export interface RegisterGYMDto {
    // phone: string;
    email: string;
    // dateOfBirth: string;
    name: string;
    description: string;
    user: {
        firstName: string;
        lastName: string;
        userName: string;
        password: string;
    }
    branch: CreateBranchDto
}