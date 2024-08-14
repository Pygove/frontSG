import React from 'react';

const EmptyActivities = () => {
  return (
    <div className='flex flex-col max-h-72 overflow-y-auto px-4 py-2'>
      <div className='flex items-center justify-center border-dashed border-2 py-5 border-slate-400 text-slate-500'>
        <span className='leading-none font-medium text-slate-900'>
          Sin actividades extra
        </span>
      </div>
    </div>
  );
};

export default EmptyActivities;
