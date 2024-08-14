import React from 'react';
// Importar link de react-router-dom
import { Link } from 'react-router-dom';
// Importar un svg
import SvgWorking from '../../assets/svg/working.svg';

const Working = () => {
  return (
    <div className='container mx-auto flex flex-col justify-between items-center'>
      <div className='flex flex-col'>
        <h1 className='font-light w-full uppercase text-center text-3xl sm:text-4xl dark:text-white text-gray-800'>
          Estamos trabajando en esta sección
        </h1>
        <h2 className='font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-4'>
          Esta y más secciones estarán disponibles pronto.
        </h2>
        <div className='flex items-center justify-center mt-4'>
          <Link
            to='/'
            className='uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900'
          >
            Inicio
          </Link>
        </div>
      </div>
      <div className='block w-full mx-auto mt-6 md:mt-0'>
        <img src={SvgWorking} className='max-w-xs md:max-w-2xl m-auto' />
      </div>
    </div>
  );
};

export default Working;
