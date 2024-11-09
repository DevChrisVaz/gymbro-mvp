import { CreateEquipmentDto } from "@/features/equipment/application/dto/create-equipment.dto";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const createEquipmentSchema: yup.ObjectSchema<CreateEquipmentDto> = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    qty: yup.number().required(),
    image: yup.string(),
    branch: yup.string()
});

export default createEquipmentSchema;