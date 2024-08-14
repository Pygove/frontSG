import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import BreadcrumbContext from '../context/breadcrumb.context';
import Breadcrumb from '../components/Breadcrumb';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const breadcrumbState = useBreadcrumb();
  // State para el sidebar
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='w-screen h-screen flex flex-col'>
      {/* Button Sidebar */}
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className='flex w-full h-full bg-slate-200 overflow-y-auto'>
        {/* <Sidebar sidebar={sidebar} setSidebar={setSidebar} /> */}
        <BreadcrumbContext.Provider value={breadcrumbState}>
          <div className='w-full h-full p-3'>
            <div className='text-indigo-600'>
              <Link to='/clientes' className='font-medium text-sm mr-5'>
                Clientes
              </Link>
              <Link
                to='/clientes/ver-clientes'
                className='font-medium text-sm mr-5'
              >
                Ver Clientes
              </Link>
              <Link
                to='/clientes/nuevo-cliente'
                className='font-medium text-sm mr-5'
              >
                New Clients
              </Link>
            </div>
            <div className='text-indigo-600'>
              <Link to='/proveedores' className='font-medium text-sm mr-5'>
                Proveedores
              </Link>
              <Link
                to='/proveedores/ver-proveedores'
                className='font-medium text-sm mr-5'
              >
                Ver Proveedores
              </Link>
              <Link
                to='/proveedores/nuevo-proveedor'
                className='font-medium text-sm mr-5'
              >
                Nuevo Proveedor
              </Link>
            </div>
            <Breadcrumb />
            <Outlet />
          </div>
        </BreadcrumbContext.Provider>
      </div>
    </div>
  );
};

const useBreadcrumb = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  const setBreadcrumbState = (state) => {
    setBreadcrumb(state);
  };

  return {
    breadcrumb,
    setBreadcrumbState,
  };
};

export default Layout;
