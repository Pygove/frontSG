import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  TrashIcon,
  PencilAltIcon,
  ExclamationIcon,
} from '@heroicons/react/outline';
import BreadcrumbContext from '../../context/breadcrumb.context';
import {
  ProvidersRoute,
  HomeRoute,
  ViewProviderRoute,
} from '../../utils/BreadcrumbRoutes';
import ProvidersApi from '../../utils/services/providers.service';
import toast from 'react-hot-toast';

const crumb = [HomeRoute, ProvidersRoute, ViewProviderRoute];


const infoContactForm = {
    Op1: 'Correo electrónico',
    Op2: 'Celular',
};
const infoShippingMethod = {
    Op1: 'Correo Argentino',
    Op2: 'OCA',
    Op3: 'Andreani',
    Op4: 'Ocasa',
    Op5: 'Crucero Express',
    Op6: 'Otro',
};
const infoFormOfPayment = {
    Op1: 'Efectivo',
    Op2: 'Mercado Pago',
    Op3: 'Tarjeta de debito',
    Op4: 'Tarjeta de credito',
};

const ViewProvider = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const providerService = new ProvidersApi();
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState(null);

  const { setBreadcrumbState } = useContext(BreadcrumbContext);

  useEffect(() => {
    setBreadcrumbState(crumb);
    fetchData(id);
  }, []);

  async function fetchData(id) {
    const provider = await providerService.findOne(id);
    setProvider(provider);
    console.log(provider);
  }

  async function handleDelete() {
    const loadingToast = toast.loading('Eliminando proveedor...');
    await providerService.delete(provider.id);
    toast.dismiss(loadingToast);
    toast.success(`Proveedor ${provider?.name} eliminado correctamente`);
    setOpen(false);
    navigate('/proveedores/ver-proveedores');
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
                        Eliminar Proveedor
                      </Dialog.Title>
                      <span className='text-base font-medium text-indigo-700'>
                        {provider?.name}
                      </span>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Estás seguro que desea eliminar este proveedor? Todos
                          sus datos serán eliminados permanentemente. Esta
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
                    onClick={() => handleDelete()}
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
      <div className='bg-white shadow rounded-lg pb-3.5 drop-shadow-md'>
        <div className='flex items-start justify-between py-3 px-4'>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Información del proveedor
            </h3>
            <p className='max-w-2xl text-sm text-gray-500'>
              Puedes modificar la información del proveedor en cualquier momento.
            </p>
          </div>
          <div className='flex justify-end gap-x-2'>
            <Link
              to = {`/proveedores/editar-proveedor/${provider?.id}`}
              className='sm:w-auto sm:px-3 sm:gap-x-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-indigo-600 bg-indigo-100 hover:bg-indigo-200 sm:mx-0 sm:h-10'
            >
              <PencilAltIcon className='h-6 w-6 ' aria-hidden='true' />
              <span className='hidden sm:block text-base'>Editar</span>
            </Link>
            <button
              onClick={() => setOpen(true)}
              className='sm:w-auto sm:px-3 sm:gap-x-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-red-600 bg-red-100 hover:bg-red-200 sm:mx-0 sm:h-10'
            >
              <TrashIcon className='h-6 w-6 ' aria-hidden='true' />
              <span className='hidden sm:block text-base'>Eliminar</span>
            </button>
          </div>
        </div>
        <div className='border-t border-gray-200'>
          <dl>

            <div className='bg-gray-50 px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Nombre</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {provider?.name}
              </dd>
            </div>

            <div className='bg-gray-50 px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Información de contacto
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {provider?.contactInformation || '-'}
              </dd>
            </div>

            <div className='bg-white px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Dirección</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {provider?.address || '-'}
              </dd>
            </div>

            <div className='bg-gray-50 px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Forma de envío
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {infoShippingMethod[provider?.shippingMethod]}
              </dd>
            </div>

            <div className='bg-white px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Forma habitual de contacto
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {infoContactForm[provider?.contactForm]}
              </dd>
            </div>

            <div className='bg-white px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Forma habitual de pago
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {infoFormOfPayment[provider?.formOfPayment]}
              </dd>
            </div>

            <div className='bg-gray-50 px-4 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Observaciones
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {provider?.observations || 'No hay observaciones'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ViewProvider;
