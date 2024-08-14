import React from 'react';

const ItemsActivitiesSkeleton = () => {
  return (
    <div className='mt-1 col-span-3 grid gap-1'>
      <div className='flex flex-wrap items-start gap-3'>
        <div className='flex items-start'>
          <div className='w-4 h-4 mr-1 col-span-3 rounded bg-slate-200 animate-pulse' />
          <div className='w-12 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
        </div>

        <div className='flex items-start'>
          <div className='w-4 h-4 mr-1 col-span-3 rounded bg-slate-200 animate-pulse' />
          <div className='w-12 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
        </div>

        <div className='flex items-start'>
          <div className='w-4 h-4 mr-1 col-span-3 rounded bg-slate-200 animate-pulse' />
          <div className='w-12 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
        </div>

        <div className='flex items-start'>
          <div className='w-4 h-4 mr-1 col-span-3 rounded bg-slate-200 animate-pulse' />
          <div className='w-12 h-3 col-span-3 rounded bg-slate-200 animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default ItemsActivitiesSkeleton;
