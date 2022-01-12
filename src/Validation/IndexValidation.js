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

export const validationRegisterStep1 = yup.object({
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Debe contener solo letras")
    .required("Este campo es obligatorio"),
  lastName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Debe contener solo letras")
    .required("Este campo es obligatorio"),
})

export const validationRegisterStep2 = yup.object({
  password: yup
    .string()
    .min(6, "Debe ingresar al menos 6 caracteres")
    .max(21, "Debe ingresar menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
  email: yup
    .string()
    .required("Este campo es obligatorio")
    .email("Email no valido"),
  userName: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, "Debe contener al menos 5 caracteres")
    .max(15, "Debe contener menos de 15 caracteres"),
})
