import * as Yup from 'yup';

const email = Yup.string()
  .email('Debe ser un email válido')
  .required('El email es requerido');
const password = Yup.string()
  .min(6, 'Debe contener 8 o más caracteres')
  .required('La contraseña es requerida');

export const loginSchema = Yup.object().shape({
  email,
  password,
});
