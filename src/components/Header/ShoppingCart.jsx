import React from 'react';

const ShoppingCart = () => {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex='0' className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='badge bg-slate-400 badge-sm indicator-item'>8</span>
        </div>
      </label>
      <div
        tabIndex='0'
        className='mt-3 card card-compact dropdown-content w-52 bg-base-100 drop-shadow-lg'
      >
        <div className='flex flex-col justify-center flex-1 p-3'>
          <span className='text-lg font-semibold text-gray-800 '>Carrito</span>
          <div className='flex items-center justify-between'>
            <p className='text-sm leading-none text-gray-500 dark:text-gray-400'>
              Total
            </p>
            <p className='text-base leading-tight mt-1 text-gray-800 dark:text-gray-100'>
              $34.840
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-sm leading-none text-gray-500 dark:text-gray-400'>
              Productos
            </p>
            <p className='text-base leading-tight mt-1 text-gray-800 dark:text-gray-100'>
              x12
            </p>
          </div>
          <div className='card-actions mt-3'>
            <button className='text-sm font-medium leading-none text-center text-white py-2.5 px-5 rounded bg-indigo-700 hover:bg-indigo-600 w-full'>
              Ver Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
