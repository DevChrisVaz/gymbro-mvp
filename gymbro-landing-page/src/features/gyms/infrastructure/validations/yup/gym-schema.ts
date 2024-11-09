import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import * as yup from "yup";
import YupPassword from "yup-password";
import createBranchSchema from "./create-branch-schema";

YupPassword(yup);

const registerGYMSchema: yup.ObjectSchema<RegisterGYMDto> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
    description: yup.string().required(),
    user: yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        userName: yup.string().required(),
        password: yup.string().password().required(),
    }),
    branch: createBranchSchema
});

export default registerGYMSchema;