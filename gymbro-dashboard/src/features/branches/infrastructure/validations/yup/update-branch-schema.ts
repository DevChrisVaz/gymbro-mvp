import { IBranch } from "@/features/branches/domain/entities/branch.entity";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const updateBranchSchema: yup.ObjectSchema<Omit<IBranch, "createdAt" | "updatedAt">> = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().length(10).required(),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
    uuid: yup.string().required()
});

export default updateBranchSchema;