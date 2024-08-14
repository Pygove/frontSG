import React from 'react';

const NewClientSkeleton = () => {
  return (
    <div className='grid grid-cols-2 bg-white rounded-lg p-2 drop-shadow-md gap-x-3'>
      <div className='col-span-2 mb-3 sm:col-span-1 sm:mb-0'>
        <h3 className='text-base font-medium leading-6 text-gray-900'>
          Datos Personales
        </h3>
        <p className='text-sm text-gray-600'>
          Los campos con * son obligatorios.
        </p>
      </div>
      <div className='col-span-2 sm:col-span-1 grid grid-cols-3 gap-3'>
        <div className='col-span-3 grid gap-1'>
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
        <div className='col-span-1 grid gap-1'>
          <LabelInput />
          <InputText />
        </div>
        <div className='col-span-1 grid gap-1'>
          <LabelInput />
          <InputText />
        </div>

        <div className='col-span-3 grid gap-1'>
          <LabelInput />
          <InputText />
        </div>
      </div>

      {/* Separator */}
      <div className='col-span-2 block' aria-hidden='true'>
        <div className='pt-4 pb-3'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='col-span-2 mb-4 sm:col-span-1 sm:mb-0'>
        <h3 className='text-base font-medium leading-6 text-gray-900'>
          Datos para nuestro negocio
        </h3>
        <p className='text-sm text-gray-600'>
          Los campos con * son obligatorios.
        </p>
      </div>
      <div className='col-span-2 sm:col-span-1 grid grid-cols-3 gap-3'>
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

        <div className='col-span-3 grid gap-1'>
          <LabelInput />
          <div className='flex flex-wrap items-start gap-3'>
            <div className='flex items-start'>
              <CheckboxItem />
            </div>

            <div className='flex items-start'>
              <CheckboxItem />
            </div>

            <div className='flex items-start'>
              <CheckboxItem />
            </div>

            <div className='flex items-start'>
              <CheckboxItem />
            </div>
          </div>
        </div>

        <div className='col-span-2 grid gap-1'>
          <LabelInput />
          <InputText />
        </div>

        <div className='col-span-3 grid grid-cols-3'>
          <div className='col-span-3 flex items-stretch justify-between mb-1'>
            <LabelInput />
            <div className='w-11 h-5 rounded-full bg-slate-200 animate-pulse' />
          </div>
          <div className='col-span-2 grid grid-cols-3 gap-2'>
            <div className='w-full h-3 col-span-2 rounded bg-slate-200 animate-pulse' />
            <div className='w-full h-3 col-span-1 rounded bg-slate-200 animate-pulse' />
            <div className='w-full h-3 col-span-1 rounded bg-slate-200 animate-pulse' />
            <div className='w-full h-3 col-span-2 rounded bg-slate-200 animate-pulse' />
            <div className='w-full h-3 col-span-2 rounded bg-slate-200 animate-pulse' />
            <div className='w-full h-3 col-span-1 rounded bg-slate-200 animate-pulse' />
          </div>
        </div>
        <div className='col-span-3 grid gap-1'>
          <LabelInput />
          <Textarea />
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

const Textarea = () => (
  <div className='w-full h-16 col-span-3 rounded bg-slate-200 animate-pulse' />
);

const CheckboxItem = () => (
  <>
    <div className='w-4 h-4 mr-1 col-span-3 rounded bg-slate-200 animate-pulse' />
    <div className='w-14 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
  </>
);

export default NewClientSkeleton;
