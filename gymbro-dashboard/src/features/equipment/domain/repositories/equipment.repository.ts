import { CreateEquipmentDto } from "../../application/dto/create-equipment.dto";
import { IEquipment } from "../entities/equipment.entity";

export interface EquipmentRepository {
    createEquipment(createEquipmentDto: CreateEquipmentDto): Promise<void>;
    getEquipmentList(branchId: string): Promise<IEquipment[]>;
    uploadImage(data: FormData): Promise<string>;
    updateEquipment(equipment: IEquipment): Promise<IEquipment>;
    deleteEquipment(uuid: string): Promise<IEquipment>;
}