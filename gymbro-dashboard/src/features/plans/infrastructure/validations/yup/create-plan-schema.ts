import { CreatePlanDto } from "@/features/plans/application/dto/create-plan.dto";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const createPlanSchema: yup.ObjectSchema<CreatePlanDto> = yup.object().shape({
    title: yup.string().required("El titulo es requerido"),
    description: yup.string().required("La descripción es requerida"),
    duration: yup.number().integer("La duración debe ser un número entero").required("La duración es requerida"),
    price: yup.number().required("El precio es requerido"),
    branch: yup.string()
});

export default createPlanSchema;