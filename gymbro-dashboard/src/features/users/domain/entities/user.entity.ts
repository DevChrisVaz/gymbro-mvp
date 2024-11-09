import { ITimestamps } from "@/core/domain/entities/timestamps.entity";

export interface IUser extends ITimestamps {
    uuid: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    status: string;
    userName: string;
}