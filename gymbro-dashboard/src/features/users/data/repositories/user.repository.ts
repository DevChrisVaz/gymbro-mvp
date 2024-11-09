import { inject, injectable } from "tsyringe";
import { IUser } from "../../domain/entities/user.entity";
import type { UserRepository } from "../../domain/repositories/user.repository";
import type { UserRemoteDataSource } from "../data-sources/users-remote-data-source";
import { CreateUserDTO } from "../../application/dto/create-user-dto";

@injectable()
export class UserRepositoryImpl implements UserRepository {
    constructor(
        @inject("UserRemoteDataSource") private userRemoteDataSource: UserRemoteDataSource,
        // private userLocalDataSource: AuthLocalDataSource
    ) { }

    async createUser(createUserDTO: CreateUserDTO): Promise<IUser> {
        const response = await this.userRemoteDataSource.create(createUserDTO);

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

    async findUsers(): Promise<IUser[]> {
        const response = await this.userRemoteDataSource.findUsers();

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

    async updateUser(user: IUser): Promise<IUser[]> {
        const response = await this.userRemoteDataSource.update(user);

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

    async deleteUser(uuid: string): Promise<IUser> {
        const response = await this.userRemoteDataSource.delete(uuid);

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
}