import React, { useEffect, useContext, useState } from 'react';
import BreadcrumbContext from '../../context/breadcrumb.context';
import {
  ProvidersRoute,
  HomeRoute,
  ListProvidersRoute,
} from '../../utils/BreadcrumbRoutes';
import ProvidersApi from '../../utils/services/providers.service';
import optionSelect from '../../utils/options_renaming/options_renaming';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import DeleteProviderModal from '../../components/Providers/DeleteProviderModal';
import Search from '../../components/Providers/Search';
import { Link } from 'react-router-dom';

const crumb = [HomeRoute, ProvidersRoute, ListProvidersRoute];

const ListProviders = () => {
  const providersService = new ProvidersApi();
  const { setBreadcrumbState } = useContext(BreadcrumbContext);
  const [providers, setProviders] = useState([]);
  const [currentProv, setCurrentProv] = useState(null);
  const [openDel, setOpenDel] = useState(false);

  useEffect(() => {
    setBreadcrumbState(crumb);
    getProviders();
  }, []);

  const getProviders = async () => {
    const data = await providersService.findAll();
    setProviders(data);
    // console.log(data);
  };

  return (
    <>
      <DeleteProviderModal
        open={openDel}
        setOpen={setOpenDel}
        provider={currentProv}
        setProvider={setCurrentProv}
        getProviders={getProviders}
      />
      <div className='flex flex-col bg-white rounded-lg p-3 pb-1 drop-shadow-md'>
        <div className='flex items-center justify-between pb-3'>
          <p className='text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-gray-800'>
            Proveedores
          </p>
          <div>
            <Link
              to='/proveedores/nuevo-proveedor'
              className='text-xs sm:text-sm font-medium leading-none text-white inline-flex items-start justify-start py-2.5 px-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
            >
              Nuevo Proveedor
            </Link>
          </div>
        </div>
        <Search setProviders={setProviders} getProviders={getProviders} />
        <div className='overflow-x-auto w-full mt-3'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th className='bg-slate-200 text-center w-2 normal-case font-bold'>
                  #
                </th>
                <th className='bg-slate-200 normal-case font-bold'>Nombre</th>
                <th className='bg-slate-200 normal-case font-bold'>Dirección</th>
                <th className='bg-slate-200 normal-case font-bold'>
                  Forma habitual de contacto
                </th>
                <th className='bg-slate-200 normal-case font-bold'>
                  Forma de envío
                </th>
                <th className='bg-slate-200 normal-case font-bold text-center'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {providers.length > 0 &&
                providers.map((provider, index) => (
                  <tr key={provider.id}>
                    <th className='bg-slate-200 text-center  w-2'>
                      {index + 1}
                    </th>
                    <td className='font-semibold'>{provider.name}</td>
                    <td
                      className='text-slate-400 font-normal'
                      title={provider.address || 'Vacío'}
                    >
                      {provider.address || '-'}
                    </td>
                    <td
                      className='text-slate-400 font-normal'
                      title= {optionSelect('contactForm',provider.contactForm)}
                    >
                      {optionSelect('contactForm',provider.contactForm)}
                    </td>
                    <td
                      className='text-slate-400 font-normal'
                      title={optionSelect('shippingMethod',provider.shippingMethod)}
                    >
                      {optionSelect('shippingMethod',provider.shippingMethod)}
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex item-center justify-center gap-x-2'>
                        <Link
                          to = {`/proveedores/ver-proveedor/${provider.id}`}
                        >
                          <EyeIcon className='w-4 transform hover:text-purple-500 hover:scale-125 cursor-pointer' />
                        </Link>
                        <Link
                          to = {`/proveedores/editar-proveedor/${provider.id}`}
                        >
                          <PencilIcon className='w-4 transform hover:text-green-500 hover:scale-125 cursor-pointer' />
                        </Link>
                        <button
                          type='button'
                          onClick={() => {
                            setOpenDel(true);
                            setCurrentProv({
                              id: provider.id,
                              name: provider.name,
                            });
                          }}
                        >
                          <TrashIcon className='w-4 transform hover:text-red-500 hover:scale-125 cursor-pointer' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListProviders;
