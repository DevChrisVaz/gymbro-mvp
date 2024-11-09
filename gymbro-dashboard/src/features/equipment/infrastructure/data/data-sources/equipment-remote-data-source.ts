import { APIResult, HttpMethod, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { CreateEquipmentDto } from "@/features/equipment/application/dto/create-equipment.dto";
import { IEquipment } from "@/features/equipment/domain/entities/equipment.entity";
import { inject, injectable } from "tsyringe";

export interface EquipmentRemoteDataSource {
    create(createEquipmentDto: CreateEquipmentDto): Promise<APIResult<void>>;
    getEquipmentList(branchId: string): Promise<APIResult<IEquipment[]>>
    uploadImage(data: FormData): Promise<APIResult<string>>;
    update(equipment: IEquipment): Promise<APIResult<IEquipment>>;
    delete(uuid: string): Promise<APIResult<IEquipment>>;
}

@injectable()
export class EquipmentRemoteDataSourceImpl implements EquipmentRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient,
    ) { }

    create(createEquipmentDto: CreateEquipmentDto): Promise<APIResult<void>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/equipment",
            {
                body: createEquipmentDto
            }
        )
    }
    getEquipmentList(branchId: string): Promise<APIResult<IEquipment[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/" + branchId + "/equipment",
            {}
        )
    }
    uploadImage(data: FormData): Promise<APIResult<string>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/equipment/upload-image",
            {
                body: data,
                options: {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            }
        )
    }

    update(equipment: IEquipment): Promise<APIResult<IEquipment>> {
        return this.apiRestClient.call(
            HttpMethod.PATCH,
            "/equipment/" + equipment.uuid,
            {
                body: equipment
            }
        )
    }

    delete(uuid: string): Promise<APIResult<IEquipment>> {
        return this.apiRestClient.call(
            HttpMethod.DELETE,
            "/equipment/" + uuid,
            {}
        )
    }

}