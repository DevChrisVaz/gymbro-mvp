import * as yup from "yup";
import YupPassword from "yup-password";
import { CreateUserDTO } from "@/features/users/application/dto/create-user-dto";

YupPassword(yup);

const createUserSchema: yup.ObjectSchema<CreateUserDTO> = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().password().required(),
    role: yup.string(),
    status: yup.string()
});

export default createUserSchema;