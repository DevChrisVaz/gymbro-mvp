import { CreateUserDTO } from "../../application/dto/create-user-dto";
import { IUser } from "../entities/user.entity";

export interface UserRepository {
    createUser(createUserDTO: CreateUserDTO): Promise<IUser>;
    findUsers(): Promise<IUser[]>;
    updateUser(user: IUser): Promise<IUser[]>;
    deleteUser(uuid: string): Promise<IUser>;
}