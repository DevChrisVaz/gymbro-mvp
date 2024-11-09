import { inject, injectable } from "tsyringe";
import { type EquipmentRepository } from "../../domain/repositories/equipment.repository";
import { IEquipment } from "../../domain/entities/equipment.entity";

@injectable()
export class GetEquipmentListUseCase {
    constructor(
        @inject("EquipmentRepository") private equipmentRepository: EquipmentRepository
    ) { }

    async run(branchId: string): Promise<IEquipment[]> {
        return await this.equipmentRepository.getEquipmentList(branchId);
    }
}