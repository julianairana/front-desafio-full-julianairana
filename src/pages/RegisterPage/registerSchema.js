import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("O nome é obrigatório!")
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(200, "O nome pode ter no máximo 200 caracteres."),
    email: yup
      .string()
      .required("E-mail inválido.")
      .email("É necessário fornecer um e-mail."),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      .min(8, "É necessário conter ao menos 8 caracteres.")
      .matches(
        /(?=.*[A-Z])/,
        "É necessário conter ao menos uma letra maiúscula."
      )
      .matches(
        /(?=.*[a-z])/,
        "É necessário conter ao menos uma letra minúscula."
      )
      .matches(/(?=.*\d)/, "É necessário conter ao menos um dígito.")
      .matches(
        /(?=.*[$*&@#])/,
        "É necessário conter ao menos um caractere especial."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "A senha não confere"),
    // image: yup
    //   .string()
    //   .required("Coloque sua foto se desejar")
    //   .max(200, "A bio pode contar até 200 caracteres."),
    phone: yup.string().required("O seu contato é obrigatório!"),
    gender: yup.string().required("A opção de gênero é opcional!")
  });
