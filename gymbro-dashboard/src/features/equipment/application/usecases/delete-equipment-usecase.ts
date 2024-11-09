import { inject, injectable } from "tsyringe";
import { type EquipmentRepository } from "../../domain/repositories/equipment.repository";

@injectable()
export class DeleteEquipmentUseCase {
    constructor(
        @inject("EquipmentRepository") private equipmentRepository: EquipmentRepository
    ) { }

    async run(uuid: string): Promise<void> {
        await this.equipmentRepository.deleteEquipment(uuid);
    }
}