import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { MyTextInput, PasswordInput } from '../components/Forms/Inputs';
import { loginSchema } from '../utils/schemas/login.schema';
import loginImg from '../assets/img/loginImg.jpg';
import toast from 'react-hot-toast';
import AdminApi from '../utils/services/admin.service';

const Login = () => {
  const adminService = new AdminApi();
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen grid grid-cols-3 overflow-hidden'>
      <div className='col-span-3 sm:col-span-1 flex flex-col justify-center px-8'>
        <div className='mb-5'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Inicia sesión en tu cuenta
          </h2>
        </div>
        <Formik
          initialValues={{
            email: 'infocarlosayala@gmail.com',
            password: 'rVaDfZGpP9lUX1hsSTbwB4WKtuJO5A2d',
          }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const loadingToast = toast.loading('Iniciando sesión...');
            setSubmitting(true);
            try {
              const response = await adminService.login(values);
              toast.dismiss(loadingToast);
              toast.success('Bienvenido');
              navigate('/');
              console.log(response);
            } catch (error) {
              toast.dismiss(loadingToast);
              setSubmitting(false);
              toast.error('Usuario o contraseña incorrectos');
            }
          }}
        >
          {({ values, setFieldValue, isSubmitting, dirty }) => (
            <Form>
              <div className='rounded-md shadow-sm mb-5'>
                <div className='mb-5'>
                  <MyTextInput
                    label='Correo'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Ingresa tu correo electrónico'
                  />
                </div>
                <div>
                  <PasswordInput
                    label='Contraseña'
                    name='password'
                    id='password'
                    placeholder='********'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Iniciar sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className='hidden h-full sm:block sm:col-span-2 sm:bg-contain sm:bg-center'>
        <img src={loginImg} alt='fondo de imagen' />
      </div>
    </div>
  );
};

export default Login;
