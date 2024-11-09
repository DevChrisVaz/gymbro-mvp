import { IGYMUser } from "../entities/gym-user";

export interface GYMUserRepository {
    getUsers(): Promise<IGYMUser>;
}