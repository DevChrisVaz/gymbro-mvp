import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const registerGYMSchema = yup.object().shape({
    // confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
    name: yup.string().required(),
    description: yup.string().required(),
    user: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        userName: yup.string().required(),
        password: yup.string().password().required(),
    })
});

export default registerGYMSchema;