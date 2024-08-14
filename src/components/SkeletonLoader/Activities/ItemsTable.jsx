import React from 'react';

const TableActivities = () => {
  return (
    <>
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
    </>
  );
};

const TextSkeleton = () => {
  return (
    <tr>
      <td className='pl-4 py-1.5 '>
        <div className='h-5 w-full bg-gray-200 animate-pulse'></div>
      </td>
      <td className='py-1.5 flex items-center justify-center gap-x-1'>
        <div className='h-8 w-8 rounded-full bg-gray-900 animate-pulse'></div>
        <div className='h-8 w-8 rounded-full bg-gray-900 animate-pulse'></div>
      </td>
    </tr>
  );
};

export default TableActivities;
