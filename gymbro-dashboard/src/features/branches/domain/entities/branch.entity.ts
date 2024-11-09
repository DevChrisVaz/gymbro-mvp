import { ITimestamps } from "@/core/domain/entities/timestamps.entity";

export interface IBranch extends ITimestamps {
    uuid: string;
    name: string;
    phone: string;
    email: string;
}