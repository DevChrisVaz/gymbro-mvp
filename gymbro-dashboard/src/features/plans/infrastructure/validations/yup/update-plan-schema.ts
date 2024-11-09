import { IPlan } from "@/features/plans/domain/entities/plan.entity";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const updatePlanSchema: yup.ObjectSchema<Omit<IPlan, "createdAt" | "updatedAt">> = yup.object().shape({
    uuid: yup.string().required(),
    title: yup.string().required("El titulo es requerido"),
    description: yup.string().required("La descripción es requerida"),
    duration: yup.number().integer("La duración debe ser un número entero").required("La duración es requerida"),
    price: yup.number().required("El precio es requerido"),
    branch: yup.string().required(),
    status: yup.string().required()
});

export default updatePlanSchema;