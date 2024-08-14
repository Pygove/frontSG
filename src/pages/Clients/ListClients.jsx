import React, { useEffect, useContext, useState } from 'react';
import BreadcrumbContext from '../../context/breadcrumb.context';
import Pagination from '../../components/Tables/Pagination';
import {
  ClientsRoute,
  HomeRoute,
  ListClientsRoute,
} from '../../utils/BreadcrumbRoutes';
import ClientsApi from '../../utils/services/clients.service';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import DeleteClientModal from '../../components/Clients/DeleteClientModal';
import Search from '../../components/Clients/Search';

const crumb = [HomeRoute, ClientsRoute, ListClientsRoute];

const ListClients = () => {
  const clientsService = new ClientsApi();
  const { setBreadcrumbState } = useContext(BreadcrumbContext);
  const [clients, setClients] = useState([]);
  const [currentCli, setCurrentCli] = useState(null);
  const [openDel, setOpenDel] = useState(false); //Delete client modal

  useEffect(() => {
    setBreadcrumbState(crumb);
    getClients();
  }, []);

  const getClients = async () => {
    const data = await clientsService.findAll();
    setClients(data);
    // console.log(data);
  };

  return (
    <>
      <DeleteClientModal
        open={openDel}
        setOpen={setOpenDel}
        client={currentCli}
        setClient={setCurrentCli}
        getClients={getClients}
      />
      <div className='flex flex-col bg-white rounded-lg p-3 pb-1 drop-shadow-md'>
        <div className='flex items-center justify-between pb-3'>
          <p className='text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-gray-800'>
            Clientes
          </p>
          <div>
            <Link
              to='/clientes/nuevo-cliente'
              className='text-xs sm:text-sm font-medium leading-none text-white inline-flex items-start justify-start py-2.5 px-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
            >
              Nuevo Cliente
            </Link>
          </div>
        </div>
        <Search setClients={setClients} getClients={getClients} />
        <div className='overflow-x-auto w-full mt-3'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th className='bg-slate-200 text-center w-2 normal-case font-bold'>
                  #
                </th>
                <th className='bg-slate-200 normal-case font-bold'>Nombre</th>
                <th className='bg-slate-200 normal-case font-bold'>Teléfono</th>
                <th className='bg-slate-200 normal-case font-bold'>
                  Tipo de cliente
                </th>
                <th className='bg-slate-200 normal-case font-bold text-center'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 &&
                clients.map((client, index) => (
                  <tr key={client.id}>
                    <th className='bg-slate-200 text-center  w-2'>
                      {index + 1}
                    </th>
                    <td className='font-semibold'>{client.name}</td>
                    <td
                      className='text-slate-400 font-normal'
                      title={client.phoneNumber || 'Vacío'}
                    >
                      {client.phoneNumber || '-'}
                    </td>
                    <td
                      className='text-slate-400 font-normal'
                      title={client.clientType || 'Vacío'}
                    >
                      {client.clientType || '-'}
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex item-center justify-center gap-x-2'>
                        <Link
                          to={`/clientes/ver-cliente/${client.id}`}
                        >
                          <EyeIcon className='w-4 transform hover:text-purple-500 hover:scale-125 cursor-pointer' />
                        </Link>
                        <Link
                          to={`/clientes/editar-cliente/${client.id}`}
                          // target='_blank' Ver de <a></a>
                        >
                          <PencilIcon className='w-4 transform hover:text-green-500 hover:scale-125 cursor-pointer' />
                        </Link>
                        <button
                          type='button'
                          onClick={() => {
                            setOpenDel(true);
                            setCurrentCli({
                              id: client.id,
                              name: client.name,
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
        {/* <Pagination totalPages={clients?.totalPages} /> */}
      </div>
    </>
  );
};

export default ListClients;
