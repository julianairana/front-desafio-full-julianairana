import * as yup from "yup";

export const modalEditSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(45, "O nome pode ter no máximo 45 caracteres."),
    email: yup
      .string()
      .email("É necessário fornecer um e-mail."),
    phone: yup.string(),
    gender: yup.string()
  });