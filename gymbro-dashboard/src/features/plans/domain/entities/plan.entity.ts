import { ITimestamps } from "@/core/domain/entities/timestamps.entity";

export interface IPlan extends ITimestamps {
    uuid: string;
    title: string;
    description: string;
    duration: number;
    price: number;
    branch: string;
    status: string;
}