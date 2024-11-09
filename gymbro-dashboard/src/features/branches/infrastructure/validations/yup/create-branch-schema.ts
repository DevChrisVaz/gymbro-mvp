import { CreateBranchDto } from "@/features/branches/application/dto/create-branch.dto";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const createBranchSchema: yup.ObjectSchema<CreateBranchDto> = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().length(10).required(),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
    address: yup.object({
        street: yup.string().required(),
        building: yup.string().required(),
        zip: yup.string().length(5).required(),
        neighborhood: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        country: yup.string().required()
    })
});

export default createBranchSchema;