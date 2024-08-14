import * as Yup from 'yup';

const contactForm = Yup.string();
const name = Yup.string().min(1).max(50).required('El nombre es requerido');
const contactInformation = Yup.string();
const address = Yup.string();
const shippingMethod = Yup.string();
const formOfPayment = Yup.string();
const observations = Yup.string();

export const createProviderSchema = Yup.object({
  contactForm,
  contactInformation,
  shippingMethod,
  formOfPayment,
  name,
  address,
  observations,
});

export const updateProviderSchema = Yup.object({
  contactForm,
  contactInformation,
  shippingMethod,
  formOfPayment,
  name,
  address,
  observations,
});
