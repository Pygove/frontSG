import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => (
  <>
    <div>
      <Toaster
        toastOptions={{
          duration: 8000,
          style: {
            maxWidth: '450px',
            minWidth: '250px',
          },
        }}
      />
    </div>

    <Outlet />
  </>
);

export default ToastProvider;
