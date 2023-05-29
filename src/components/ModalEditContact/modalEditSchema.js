import * as yup from "yup";

export const modalEditSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("O nome é obrigatório!")
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(45, "O nome pode ter no máximo 45 caracteres."),
    email: yup
      .string()
      .required("E-mail inválido.")
      .email("É necessário fornecer um e-mail."),
    phone: yup.string().required("O seu contato é obrigatório!"),
    gender: yup.string().required("A opção de gênero é opcional!")
  });