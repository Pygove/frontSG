import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Clients from './pages/Clients/Clients';
import NewClient from './pages/Clients/NewClient';
import ListClients from './pages/Clients/ListClients';
import ViewClient from './pages/Clients/ViewClient';
import EditClient from './pages/Clients/EditClient';

import Providers from './pages/Providers/Providers';
import ExtraActivities from './pages/ExtraActivities/ExtraActivities';
import ToastProvider from './hooks/useToast';

import ItemsTable from './components/SkeletonLoader/Activities/ItemsTable';
// import Login from './pages/Login';
import Working from './components/Pages404/Working';
import NewProvider from './pages/Providers/NewProvider';
import EditProvider from './pages/Providers/EditProvider';
import ListProviders from './pages/Providers/ListProviders';
import { ViewProviderRoute } from './utils/BreadcrumbRoutes';
import ViewProvider from './pages/Providers/ViewProvider';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ToastProvider />}>
          {/* Login, LogOut, etc */}
          {/* <Route path='/login' element={<Login />} /> */}

          {/* Dashboard */}
          <Route element={<Layout />}>
            <Route path='/' element={<Working />} />
            <Route path='/caja' element={<Working />}>
              <Route path='nuevo-movimiento' element={<Working />} />
            </Route>

            {/* CLIENTES */}
            <Route path='/clientes' element={<Clients />} />
            <Route path='/clientes/ver-clientes' element={<ListClients />} />
            <Route path='/clientes/nuevo-cliente' element={<NewClient />} />
            <Route path='/clientes/ver-cliente/:id' element={<ViewClient />} />
            <Route
              path='/clientes/editar-cliente/:id'
              element={<EditClient />}
            />

            {/* Actividades */}
            <Route path='/clientes/actividades' element={<ExtraActivities />} />
            {/* Productos */}
            <Route path='/productos' element={<Working />} />
            {/* Proveedores */}
            <Route path='/proveedores' element={<Providers />} />
            <Route path='/proveedores/ver-proveedores' element={<ListProviders />} />
            <Route path='/proveedores/nuevo-proveedor' element={<NewProvider />} />
            <Route path='/proveedores/ver-proveedor/:id' element={<ViewProvider />} />
            <Route
              path='/proveedores/editar-proveedor/:id'
              element={<EditProvider />}
            />
            {/* Pendientes */}
            <Route path='/pendientes' element={<Working />} />
          </Route>
          {/* 404 */}
          <Route path='*' element={<Working />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const useAuth = () => {
  const [auth, setAuth] = useState({
    jwt: localStorage.getItem('jid') || undefined,
  });

  useEffect(() => {
    auth?.jwt && getProfile(auth.jwt);
  }, []);

  const login = (jwt, user) => {
    localStorage.setItem('jid', jwt);
    setAuth({ jwt, user });
  };

  const logout = () => {
    localStorage.removeItem('jid');
    setAuth(undefined);
  };

  const getProfile = async (jwt) => {
    const profileResponse = await profileRequest(jwt);

    profileResponse.error
      ? logout()
      : setAuth({ jwt, user: profileResponse.data });
  };
};

export default App;
