import * as Yup from 'yup';

const dni = Yup.string()
  .min(7, 'El DNI debe tener al menos 7 caracteres')
  .max(8, 'El DNI debe tener un máximo de 8 caracteres');
const cuit = Yup.string();
const cuil = Yup.string();
const ivaCondition = Yup.string();
const name = Yup.string().min(1).max(50).required('El nombre es requerido');
const phoneNumber = Yup.string();
const clientTypes = Yup.array().of(Yup.string());
const entrepeneur = Yup.string();
const businessName = Yup.string();
const address = Yup.string();
const locality = Yup.string();
const extraActivities = Yup.array().of(Yup.string());
const formOfSend = Yup.string();
const observations = Yup.string();

export const createClientSchema = Yup.object({
  dni,
  cuit,
  cuil,
  ivaCondition,
  name,
  phoneNumber,
  clientTypes,
  entrepeneur,
  businessName,
  address,
  locality,
  extraActivities,
  formOfSend,
  observations,
});

export const updateClientSchema = Yup.object({
  dni,
  cuit,
  cuil,
  ivaCondition,
  name,
  phoneNumber,
  clientTypes,
  entrepeneur,
  businessName,
  address,
  locality,
  extraActivities,
  formOfSend,
  observations,
});
