import yup from "yup";

export const requiredNumber = yup.number().min(1).required();
export const requiredString = yup.string().min(1).required();
