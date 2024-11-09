import { IEquipment } from "@/features/equipment/domain/entities/equipment.entity";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const updateEquipmentSchema: yup.ObjectSchema<Omit<IEquipment, "createdAt" | "updatedAt">> = yup.object().shape({
    uuid: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
    qty: yup.number().required(),
    branch: yup.string().required(),
    status: yup.string().required()
});

export default updateEquipmentSchema;