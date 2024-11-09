import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { IUser } from "../../domain/entities/user.entity";
import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../application/dto/create-user-dto";

export interface UserRemoteDataSource {
    findUsers(): Promise<APIResult<IUser[]>>;
    update(user: IUser): Promise<APIResult<IUser[]>>;
    delete(uuid: string): Promise<APIResult<IUser>>;
    create(createUserDTO: CreateUserDTO): Promise<APIResult<IUser>>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
    constructor(@inject("ApiRestClient") private apiRestClient: ApiRestClient) { }

    findUsers(): Promise<APIResult<IUser[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/users",
            {}
        )
    }

    create(createUserDTO: CreateUserDTO): Promise<APIResult<IUser>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/users",
            {
                body: createUserDTO
            }
        )
    }

    update(user: IUser): Promise<APIResult<IUser[]>> {
        return this.apiRestClient.call(
            HttpMethod.PATCH,
            "/users/" + user.uuid,
            {
                body: user
            }
        )
    }

    delete(uuid: string): Promise<APIResult<IUser>> {
        return this.apiRestClient.call(
            HttpMethod.DELETE,
            "/users/" + uuid,
            {}
        )
    }
}