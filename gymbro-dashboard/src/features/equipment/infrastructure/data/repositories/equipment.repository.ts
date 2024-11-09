import { EquipmentRepository } from "@/features/equipment/domain/repositories/equipment.repository";
import { inject, injectable } from "tsyringe";
import { type EquipmentRemoteDataSource } from "../data-sources/equipment-remote-data-source";
import { CreateEquipmentDto } from "@/features/equipment/application/dto/create-equipment.dto";
import { IEquipment } from "@/features/equipment/domain/entities/equipment.entity";

@injectable()
export class EquipmentRepositoryImpl implements EquipmentRepository {
    constructor(
        @inject("EquipmentRemoteDataSource") private equipmentRemoteDataSource: EquipmentRemoteDataSource
    ) { }

    async createEquipment(createEquipmentDto: CreateEquipmentDto): Promise<void> {
        const response = await this.equipmentRemoteDataSource.create(createEquipmentDto);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async getEquipmentList(branchId: string): Promise<IEquipment[]> {
        const response = await this.equipmentRemoteDataSource.getEquipmentList(branchId);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async uploadImage(data: FormData): Promise<string> {
        const response = await this.equipmentRemoteDataSource.uploadImage(data);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async updateEquipment(equipment: IEquipment): Promise<IEquipment> {
        const response = await this.equipmentRemoteDataSource.update(equipment);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async deleteEquipment(uuid: string): Promise<IEquipment> {
        const response = await this.equipmentRemoteDataSource.delete(uuid);

        switch (response.type) {
            case "Succeeded":
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