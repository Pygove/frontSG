import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Dialog, Transition, Switch } from '@headlessui/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ExclamationIcon,
  RefreshIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';
import BreadcrumbContext from '../../context/breadcrumb.context';
import {
  ClientsRoute,
  HomeRoute,
  NewClientRoute,
} from '../../utils/BreadcrumbRoutes';
import ClientsApi from '../../utils/services/clients.service';
import ActivitiesApi from '../../utils/services/activities.service';
import toast from 'react-hot-toast';
import { Formik, Field, Form } from 'formik';
import { createClientSchema } from '../../utils/schemas/client.schema';
import { MyTextInput } from '../../components/Forms/Inputs';
import NewClientSkeleton from '../../components/SkeletonLoader/Clients/NewClient';
import TypesOfClientApi from '../../utils/services/typesOfClient.service';

const crumb = [HomeRoute, ClientsRoute, NewClientRoute];

const NewClient = () => {
  const activityService = new ActivitiesApi();
  const clientsService = new ClientsApi();
  const typesOfClientService = new TypesOfClientApi();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [typesOfClient, setTypesOfClient] = useState([]);
  const [toggleActivity, setToggleActivity] = useState(false);
  const { setBreadcrumbState } = useContext(BreadcrumbContext);

  //Formik
  const initialValues = {
    dni: '',
    cuit: '',
    cuil: '',
    ivaCondition: '1',
    name: '',
    phoneNumber: '',
    entrepeneur: 'false',
    businessName: '',
    address: '',
    locality: '',
    extraActivities: [],
    clientTypes: [],
    formOfSend: 'Op1',
    observations: '',
  };

  useEffect(() => {
    setBreadcrumbState(crumb);
    fetchTypesOfClient();
  }, []);

  // Para el "recargar" del activity list del form
  useEffect(() => {
    fetchActivities();
  }, [activities.length]);

  function goHome() {
    navigate('/clientes/ver-clientes');
  }
  async function fetchActivities() {
    const activities = await activityService.findAll();
    setActivities(activities);
  }
  async function fetchTypesOfClient() {
    const typesOfClients = await typesOfClientService.findAll();
    // console.log(typesOfClients);
    setTypesOfClient(typesOfClients);
  }

  return (
    <>
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
                        Descartar cliente
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Estás seguro que desea descartar estos datos? Todos
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
                    onClick={() => goHome()}
                  >
                    Si, descartar
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
      {/* <NewClientSkeleton /> */}
      <div className='flex flex-col bg-white rounded-lg pt-3 drop-shadow-md'>
        <Formik
          initialValues={initialValues}
          validationSchema={createClientSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const loadingToast = toast.loading('Creando cliente...');
            setSubmitting(true);
            console.log(values);
            try {
              const res = await clientsService.create(values);
              toast.dismiss(loadingToast);
              toast.success(`Cliente ${res.name} creado correctamente`);
              navigate('/clientes/ver-cliente/' + res.id);
            } catch (error) {
              setSubmitting(false);
              toast.dismiss(loadingToast);
              toast.error(error.message);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className='grid grid-cols-2 px-3'>
                {/* Title Separator: Datos Personales */}
                <div className='col-span-2 mb-3 sm:col-span-1 sm:mb-0'>
                  <h3 className='text-base font-medium leading-6 text-gray-900'>
                    Datos Personales
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Los campos con * son obligatorios.
                  </p>
                </div>
                <div className='col-span-2 sm:col-span-1 grid grid-cols-3 gap-3'>
                  {/* Name */}
                  <div className='col-span-3 sm:col-span-3'>
                    <MyTextInput
                      label='Nombre *'
                      name='name'
                      id='name'
                      placeholder='Ej: Carlos Daniel Ayala'
                    />
                  </div>
                  {/* DNI */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='DNI'
                      name='dni'
                      id='dni'
                      placeholder='Ej: 49.999.999'
                    />
                  </div>
                  {/* CUIT */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='CUIT'
                      name='cuit'
                      id='cuit'
                      placeholder='Ej: 23-99999999-9'
                    />
                  </div>
                  {/* CUIL */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='CUIL'
                      name='cuil'
                      id='cuil'
                      placeholder='Ej: 23-99999999-9'
                    />
                  </div>
                  {/* phoneNumber */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='Número de Teléfono'
                      name='phoneNumber'
                      id='phoneNumber'
                      placeholder='Ej: 3764-999999'
                    />
                  </div>
                  {/* locality */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='Localidad'
                      name='locality'
                      id='locality'
                      placeholder='Ej: Capital'
                    />
                  </div>
                  {/* businessName */}
                  <div className='col-span-3 sm:col-span-1'>
                    <MyTextInput
                      label='Razón Social'
                      name='businessName'
                      id='businessName'
                      placeholder='Ej: S.A. Ayala'
                    />
                  </div>
                  {/* address */}
                  <div className='col-span-3 sm:col-span-3'>
                    <MyTextInput
                      label='Dirección'
                      name='address'
                      id='address'
                      placeholder='Ej: S.A. Ayala'
                    />
                  </div>
                </div>
                {/* Separator */}
                <div className='col-span-2 block' aria-hidden='true'>
                  <div className='py-5'>
                    <div className='border-t border-gray-200' />
                  </div>
                </div>
                {/* Title Separator: Datos para nuestro negocio */}
                <div className='col-span-2 mb-4 sm:col-span-1 sm:mb-0'>
                  <h3 className='text-base font-medium leading-6 text-gray-900'>
                    Datos para nuestro negocio
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Los campos con * son obligatorios.
                  </p>
                </div>
                <div className='col-span-2 sm:col-span-1 grid grid-cols-3 gap-3'>
                  {/* IvaCondition */}
                  <div className='col-span-3 sm:col-span-2'>
                    <label
                      htmlFor='ivaCondition'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Condición IVA
                    </label>
                    <Field
                      component='select'
                      id='ivaCondition'
                      name='ivaCondition'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    >
                      <option value='1'>IVA Responsable Inscripto</option>
                      <option value='2'>IVA Responsable no Inscripto</option>
                      <option value='3'>IVA no Responsable</option>
                      <option value='4'>IVA Sujeto Exento</option>
                      <option value='5'>Consumidor Final</option>
                      <option value='6'>Responsable Monotributo</option>
                      <option value='7'>Sujeto no Categorizado</option>
                      <option value='8'>Proveedor del Exterior</option>
                      <option value='9'>Cliente del Exterior</option>
                      <option value='10'>IVA Liberado - Ley Nº 19.640</option>
                      <option value='11'>
                        IVA Responsable Inscripto - Agente de Percepción
                      </option>
                      <option value='12'>Pequeño Contribuyente Eventual</option>
                      <option value='13'>Monotributista Social</option>
                      <option value='14'>
                        Pequeño Contribuyente Eventual Social
                      </option>
                    </Field>
                  </div>
                  {/* entrepeneur */}
                  <div className='col-span-3 sm:col-span-1'>
                    <label
                      htmlFor='entrepeneur'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Emprendedor
                    </label>
                    <Field
                      component='select'
                      id='entrepeneur'
                      name='entrepeneur'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    >
                      <option value='false'>No</option>
                      <option value='true'>Si</option>
                    </Field>
                  </div>
                  {/* formOfSend */}
                  <div className='col-span-3 sm:col-span-1'>
                    <label
                      htmlFor='formOfSend'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Forma de Envío
                    </label>
                    <Field
                      component='select'
                      id='formOfSend'
                      name='formOfSend'
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
                  {/* typeOfClient */}
                  <div className='col-span-3'>
                    <span className='block text-sm font-medium text-gray-700'>
                      Tipo de Cliente
                    </span>
                    <div className='flex items-center mt-2 gap-2 flex-wrap'>
                      {typesOfClient.length > 0 &&
                        typesOfClient.map((typeOfClient) => (
                          <label
                            key={typeOfClient.id}
                            className='flex items-center gap-x-1 text-sm capitalize'
                          >
                            <Field
                              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                              type='checkbox'
                              name='clientTypes'
                              value={typeOfClient.id}
                            />
                            {typeOfClient.name}
                          </label>
                        ))}
                    </div>
                  </div>
                  {/* activities */}
                  <div className='col-span-3'>
                    <div className='flex items-center justify-between gap-x-1'>
                      <span className='block text-sm font-medium text-gray-700'>
                        Actividades
                      </span>
                      <div className='flex items-center gap-x-3'>
                        <span
                          onClick={() => fetchActivities()}
                          title='Recargar lista'
                          className='flex items-center bg-indigo-400 p-1 cursor-pointer rounded-full hover:bg-indigo-500'
                        >
                          <RefreshIcon className='h-4 w-4 text-slate-200' />
                        </span>
                        <a
                          title='Agregar actividad'
                          className='flex items-center bg-indigo-400 p-1 cursor-pointer rounded-full hover:bg-indigo-500'
                          href='/clientes/actividades'
                          target='_blank'
                        >
                          <PlusCircleIcon className='h-4 w-4 text-slate-200' />
                        </a>
                      </div>
                    </div>
                    <div className='flex items-center mt-2 gap-2 flex-wrap'>
                      {activities.length > 0 ? (
                        activities.map((activity) => (
                          <label
                            key={activity.id}
                            className='flex items-center gap-x-1 text-sm capitalize'
                          >
                            <Field
                              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                              type='checkbox'
                              name='extraActivities'
                              value={activity.id}
                            />
                            {activity.name}
                          </label>
                        ))
                      ) : (
                        <div className='italic text-xs text-slate-700'>
                          No hay actividades.{' '}
                          <a
                            className='text-indigo-600 font-semibold'
                            href='/clientes/actividades'
                            target='_blank'
                          >
                            Agregar{' '}
                          </a>
                          o{' '}
                          <span
                            onClick={() => fetchActivities()}
                            className='text-indigo-600 font-semibold cursor-pointer'
                          >
                            Recargar
                          </span>{' '}
                          (si ya fuiste y agregaste una).
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className='col-span-3'>
                    <SwitchBtn
                      setValue={setFieldValue}
                      value={values.specialDiscount}
                    />
                  </div> */}
                  {/* observations */}
                  <div className='col-span-3'>
                    <label
                      htmlFor='observations'
                      className='block text-sm font-medium text-gray-700'
                    >
                      About
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
              <div className='flex justify-end gap-x-2 p-3 mt-5 bg-gray-200 rounded-b-lg'>
                <button
                  onClick={() => setOpen(true)}
                  type='button'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  Descartar
                </button>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
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

// const SwitchBtn = ({ value, setValue }) => {
//   const [enabled, setEnabled] = useState(value);

//   useEffect(() => {
//     setValue('specialDiscount', enabled);
//   }, [enabled]);

//   return (
//     <Switch.Group>
//       <div className='flex items-start justify-between'>
//         <div className='w-4/5	'>
//           <Switch.Label className='block text-sm font-medium text-gray-700'>
//             Descuento Especial
//           </Switch.Label>
//           <Switch.Label className='text-sm text-gray-500'>
//             Esto permite que el cliente tenga un descuento especial en su
//             compra. Verás esta información en el carrito de compras cuando
//             seleccione el comprador.
//           </Switch.Label>
//         </div>
//         <Switch
//           checked={enabled}
//           onChange={setEnabled}
//           className={`${
//             enabled ? 'bg-blue-600' : 'bg-gray-400'
//           } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-1`}
//         >
//           <span
//             className={`${
//               enabled ? 'translate-x-6' : 'translate-x-1'
//             } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
//           />
//         </Switch>
//       </div>
//     </Switch.Group>
//   );
// };

export default NewClient;

/* <div className='flex items-center justify-between mb-2'>
  <p className='text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-gray-800'>
    Nuevo Cliente
  </p>
</div> */
