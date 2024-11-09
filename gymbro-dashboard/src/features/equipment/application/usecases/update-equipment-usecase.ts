import { inject, injectable } from "tsyringe";
import { type EquipmentRepository } from "../../domain/repositories/equipment.repository";
import { IEquipment } from "../../domain/entities/equipment.entity";

@injectable()
export class UpdateEquipmentUseCase {
    constructor(
        @inject("EquipmentRepository") private equipmentRepository: EquipmentRepository
    ) { }

    async run(equipment: IEquipment, data: FormData): Promise<void> {
        const imagePath: string = await this.equipmentRepository.uploadImage(data);
        equipment.image = imagePath;
        await this.equipmentRepository.updateEquipment(equipment);
    }
}