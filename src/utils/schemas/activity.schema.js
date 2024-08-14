import * as Yup from 'yup';

const name = Yup.string()
  .min(2, 'Debe contener 2 o más caracteres')
  .max(50, 'Debe contener 50 o menos caracteres')
  .required('El nombre es requerido');

export const createActivitySchema = Yup.object().shape({
  name,
});

export const updateActivitySchema = Yup.object().shape({
  name,
});
