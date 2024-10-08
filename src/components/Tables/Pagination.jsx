import React from 'react';

const Pagination = ({ totalPages }) => {
  console.log(totalPages);
  return (
    <>
      <div className='flex items-center justify-center mt-3 mb-2 w-full'>
        <div className='lg:w-3/5 w-full  flex items-center justify-between'>
          <div className='flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer'>
            <svg
              width={14}
              height={8}
              viewBox='0 0 14 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.1665 4H12.8332'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.1665 4L4.49984 7.33333'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.1665 4.00002L4.49984 0.666687'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className='hidden text-sm ml-3 font-medium leading-none md:visible'>
              Previous
            </p>
          </div>

          <div className='flex items-center gap-x-2'>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              1
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              2
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              3
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-white bg-indigo-700 border-t border-indigo-400 p-2'>
              4
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              5
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              6
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              7
            </p>
            <p className='text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 p-2'>
              8
            </p>
          </div>

          <div className='flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer'>
            <p className='hidden text-sm font-medium leading-none mr-3 md:visible'>
              Next
            </p>
            <svg
              width={14}
              height={8}
              viewBox='0 0 14 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.1665 4H12.8332'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.5 7.33333L12.8333 4'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.5 0.666687L12.8333 4.00002'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
