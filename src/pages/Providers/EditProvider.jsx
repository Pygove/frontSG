import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Dialog, Transition} from '@headlessui/react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import {
  ExclamationIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';
import BreadcrumbContext from '../../context/breadcrumb.context';
import {
  ProvidersRoute,
  HomeRoute,
  EditProvidersRoute,
} from '../../utils/BreadcrumbRoutes';
import ProvidersApi from '../../utils/services/providers.service';
import { updateProviderSchema } from '../../utils/schemas/provider.schema';
import toast from 'react-hot-toast';
import { Formik, Field, Form } from 'formik';
import { MyTextInput } from '../../components/Forms/Inputs';
import NewProviderSkeleton from '../../components/SkeletonLoader/Provider/NewProvider';


const crumb = [HomeRoute, ProvidersRoute, EditProvidersRoute];

const EditProvider = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const providersService = new ProvidersApi();
  const [open, setOpen] = useState(false); // Delete client modal
  const [openCancel, setOpenCancel] = useState(false); // Cancel modal
  const { setBreadcrumbState } = useContext(BreadcrumbContext);

  const [provider, setProvider] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBreadcrumbState(crumb);
    fetchData();
  }, []);

  async function handleDelete() {
    const loadingToast = toast.loading('Eliminando proveedor...');
    await providersService.delete(id);
    toast.dismiss(loadingToast);
    toast.success(`Proveedor ${provider?.name} eliminado correctamente`);
    setOpen(false);
    navigate('/proveedores/ver-proveedores');
  }

  async function fetchData() {
    const data = await providersService.findOne(id);

    //Formik
    const initialValues = {
      contactForm: data.contactForm,
      contactInformation: data.contactInformation || '',
      shippingMethod: data.shippingMethod,
      formOfPayment: data.formOfPayment,
      name: data.name || '',
      address: data.address || '',
      observations: data.observations || '',
    };
    setProvider(initialValues);
    // console.log(data);
    setLoading(false);
  }

  if (loading) return <NewProviderSkeleton />;

  return (
    <>
      {/* Delete provider modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-hidden'
          onClose={setOpen}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <ExclamationIcon
                        className='h-6 w-6 text-red-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 font-medium text-gray-900'
                      >
                        Eliminar proveedor
                      </Dialog.Title>
                      <span className='text-base font-medium text-indigo-700'>
                        {provider?.name}
                      </span>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Estás seguro que desea eliminar este proveedor? Todos
                          los datos serán eliminados permanentemente. Esta
                          acción no puede ser revertida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => {
                      setOpen(false)
                      handleDelete()
                    }}
                  >
                    Si, eliminar
                  </button>
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Cancel provider modal */}
      <Transition.Root show={openCancel} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-hidden'
          onClose={setOpenCancel}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <ExclamationCircleIcon
                        className='h-6 w-6 text-yellow-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 font-medium text-gray-900'
                      >
                        Descartar cambios
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Estás seguro que desea descartar los cambios?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <Link
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpenCancel(false)}
                    to = '/proveedores/ver-proveedores'
                  >
                    Si, descartar
                  </Link>
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpenCancel(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='flex flex-col bg-white rounded-lg pt-3 drop-shadow-md'>
        <Formik
          initialValues={provider}
          validationSchema={updateProviderSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const loadingToast = toast.loading('Guardando cambios...');
            setSubmitting(true);
            console.log(values);
            try {
              const res = await providersService.update(id, values);
              // console.log(id, values);
              toast.dismiss(loadingToast);
              toast.success(`Proveedor ${res.name} actualizado correctamente`);
              setProvider(values);
            } catch (error) {
              setSubmitting(false);
              toast.dismiss(loadingToast);
              toast.error(error.message);
            }
          }}
        >
          {({ values, setFieldValue, isSubmitting, dirty }) => (
            <Form>
            <div className='grid grid-cols-3 px-3'>
              {/* Title Separator: Datos Personales */}
              <div className='col-span-2 mb-3 sm:col-span-1 sm:mb-0'>
                <h3 className='mt-2 text-2xl font-medium leading-6 text-gray-900'>
                  Editar Proveedor
                </h3>
                <p className='text-sm text-gray-600'>
                  Los campos con * son obligatorios.
                </p>
              </div>

              {/* Separator */}
              <div className='col-span-3 block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200' />
                </div>
              </div>

              <div className='col-span-2 sm:col-span-3 grid grid-cols-3 gap-3'>
                {/* Name */}
                <div className='col-span-3 sm:col-span-1'>
                  <MyTextInput
                    label='Nombre *'
                    name='name'
                    id='name'
                    placeholder='Ej: Carlos Daniel Ayala'
                  />
                </div>

                {/* contactForm */}
                <div className='col-span-3 sm:col-span-1'>
                  <label
                    htmlFor='contactForm'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Forma habitual de contacto
                  </label>
                  <Field
                    component='select'
                    id='contactForm'
                    name='contactForm'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='Op1'>Correo electrónico</option>
                    <option value='Op2'>Celular</option>
                  </Field>
                </div>

                {/* contactInformation */}
                <div className='col-span-3 sm:col-span-1'>
                  <MyTextInput
                    label='Información de contacto'
                    name='contactInformation'
                    id='contactInformation'
                    placeholder='Ingrese el texto/número...'
                  />
                </div>

                {/* formOfPayment */}
                <div className='col-span-3 sm:col-span-1'>
                  <label
                    htmlFor='formOfPayment'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Forma habitual de pago
                  </label>
                  <Field
                    component='select'
                    id='formOfPayment'
                    name='formOfPayment'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='Op1'>Efectivo</option>
                    <option value='Op2'>Mercado Pago</option>
                    <option value='Op2'>Tarjeta de debito</option>
                    <option value='Op2'>Tarjeta de credito</option>
                  </Field>
                </div>

                {/* shippingMethod */}
                <div className='col-span-3 sm:col-span-1'>
                  <label
                    htmlFor='shippingMethod'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Forma de Envío
                  </label>
                  <Field
                    component='select'
                    id='shippingMethod'
                    name='shippingMethod'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='Op1'>Correo Argentino</option>
                    <option value='Op2'>OCA</option>
                    <option value='Op3'>Andreani</option>
                    <option value='Op4'>Ocasa</option>
                    <option value='Op5'>Crucero Express</option>
                    <option value='Op6'>Otro</option>
                  </Field>
                </div>

                {/* address */}
                <div className='col-span-3 sm:col-span-2'>
                  <MyTextInput
                    label='Dirección'
                    name='address'
                    id='address'
                    placeholder='Ingrese la dirección del repartidor...'
                  />
                </div>

                {/* observations */}
                <div className='col-span-2'>
                  <label
                    htmlFor='observations'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Observaciones
                  </label>
                  <Field
                    as='textarea'
                    id='observations'
                    name='observations'
                    rows='4'
                    className='text-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='Agregue un comentario...'
                  />
                </div>
              </div>

            </div>
            <div className='flex justify-center sm:justify-end gap-x-2 p-3 mt-5 bg-gray-200 rounded-b-lg'>
              <button
                onClick={() => {
                  setOpen(true);
                }}
                type='button'
                className='inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                Eliminar Proveedor
              </button>
              <button
                disabled={isSubmitting || !dirty}
                onClick={() => setOpenCancel(true)}
                type='button'
                className={`${
                  isSubmitting || !dirty
                    ? 'disabled:opacity-75 cursor-not-allowed'
                    : ''
                } inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`}
              >
                Descartar Cambios
              </button>
              <button
                type='submit'
                disabled={isSubmitting || !dirty}
                className={`${
                  isSubmitting || !dirty
                    ? 'disabled:opacity-75 cursor-not-allowed'
                    : ''
                } inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}
              >
                Guardar
              </button>
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditProvider;