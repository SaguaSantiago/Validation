import * as yup from "yup"


export const validationLogin = yup.object({
    email: yup
      .string()
    //   .matches(/[a-zA-Z]/, "Debe contener solo letras")
      .required("Este campo es obligatorio")
      .email("Email no valido"),
    //   .min(4, "Debe ingresar al menos 4 caracteres ")
    //   .max(24, "Debe ingresar menos de 24 caracteres"),
    password: yup
      .string()
      .min(6, "Debe ingresar al menos 6 caracteres")
      .max(21, "Debe ingresar menos de 20 caracteres")
      .required("Este campo es obligatorio"),
  })

