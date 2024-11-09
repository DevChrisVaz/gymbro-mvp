import { inject, injectable } from "tsyringe";
import { type EquipmentRepository } from "../../domain/repositories/equipment.repository";
import { CreateEquipmentDto } from "../dto/create-equipment.dto";

@injectable()
export class CreateEquipmentUseCase {
    constructor(
        @inject("EquipmentRepository") private equipmentRepository: EquipmentRepository
    ) { }

    async run(createEquipmentDto: CreateEquipmentDto, data: FormData): Promise<void> {
        const imagePath: string = await this.equipmentRepository.uploadImage(data);
        createEquipmentDto.image = imagePath;
        await this.equipmentRepository.createEquipment(createEquipmentDto);
    }
}