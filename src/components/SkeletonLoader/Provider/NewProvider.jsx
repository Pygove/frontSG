import React from 'react';

const NewProviderSkeleton = () => {
  return (
    <div className='grid grid-cols-2 bg-white rounded-lg p-2 drop-shadow-md gap-x-3'>
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

        <div className='col-span-3 sm:col-span-3 grid grid-cols-3 gap-3'>
            <div className='col-span-1 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>
            <div className='col-span-1 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>
            <div className='col-span-1 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>

            <div className='col-span-1 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>
            <div className='col-span-1 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>

            <div className='col-span-2 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>

            <div className='col-span-2 grid gap-1'>
                <LabelInput />
                <InputText />
            </div>

        </div>
    </div>
  );
};

const InputText = () => (
  <div className='w-full h-9 col-span-3 rounded bg-slate-200 animate-pulse' />
);

const LabelInput = () => (
  <div className='w-1/4 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
);

export default NewProviderSkeleton;
