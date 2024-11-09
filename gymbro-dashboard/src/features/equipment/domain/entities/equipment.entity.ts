import { ITimestamps } from "@/core/domain/entities/timestamps.entity";

export interface IEquipment extends ITimestamps {
    uuid: string;
    name: string;
    description: string;
    image: string;
    qty: number;
    branch: string;
    status: string;
}