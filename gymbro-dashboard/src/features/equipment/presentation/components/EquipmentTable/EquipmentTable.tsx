import React, { useEffect, useState } from "react";
import { container } from "@/config/dependencies";
import { GetEquipmentListUseCase } from "@/features/equipment/application/usecases/get-equipment-list-usecase";
import { IEquipment } from "@/features/equipment/domain/entities/equipment.entity";
import { DeleteEquipmentUseCase } from "@/features/equipment/application/usecases/delete-equipment-usecase";
import DataTable from "@/core/components/flowbite/Tables/DataTable/DataTable";
import UpdateEquipmentForm from "../UpdateEquipmentForm/UpdateEquipmentForm";

export type EquipmentTableProps = {
    branchId: string;
}

export const EquipmentTable: React.FC<EquipmentTableProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [equipment, setEquipment] = useState<IEquipment[]>([]);

    const getEquipmentListUseCase = container.resolve<GetEquipmentListUseCase>("GetEquipmentListUseCase");
    const deleteEquipmentUseCase = container.resolve<DeleteEquipmentUseCase>("DeleteEquipmentUseCase");

    const findEquipmentList = async () => {
        setIsLoading(true);
        setEquipment(await getEquipmentListUseCase.run(props.branchId));
        setIsLoading(false);
    }

    const deleteEquipment = async (equipment?: IEquipment) => {
        if (equipment) {
            await deleteEquipmentUseCase.run(equipment.uuid);
        }
    }

    useEffect(() => {
        findEquipmentList();
    }, [props.branchId]);

    return (
        <DataTable
            columns={[
                {
                    id: "name",
                    name: "Sucursal"
                },
                {
                    id: "qty",
                    name: "Cantidad"
                },
                {
                    id: "description",
                    name: "Descripción"
                }
            ]}
            rows={equipment}
            isLoading={isLoading}
            form={<UpdateEquipmentForm />}
            onDelete={deleteEquipment}
        />
    );
}