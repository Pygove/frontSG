import React from 'react';
function Index() {
  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className='bg-white dark:bg-gray-800 shadow rounded xl:flex lg:flex w-full'>
        <div className='xl:w-2/5 lg:w-2/5 bg-gray-100 dark:bg-gray-800 py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 rounded-full mb-3'>
              <img
                className='h-full w-full object-cover rounded-full shadow'
                src='https://dh-ui.s3.amazonaws.com/assets/photo-1570211776045-af3a51026f4a.jfif'
                alt
              />
            </div>
            <p className='mb-2 text-lg font-bold text-gray-900 dark:text-gray-100'>
              Shane Doe
            </p>
            <p className='mb-6 text-sm text-gray-700 dark:text-gray-400'>
              shane@awesomeness.com
            </p>
            <button className='bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none'>
              Send Message
            </button>
          </div>
        </div>
        <div className='xl:w-3/5 lg:w-3/5 px-6 py-8'>
          <div className='flex flex-wrap justify-between'>
            <div className='w-2/5 mb-8'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Birthday
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  29 Jan, 1982
                </p>
              </div>
            </div>
            <div className='w-2/5 mb-8'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Gender
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>Male</p>
              </div>
            </div>
            <div className='w-2/5 mb-8'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Location
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  California, USA
                </p>
              </div>
            </div>
            <div className='w-2/5 mb-8'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Phone Number
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  202-555-0191
                </p>
              </div>
            </div>
            <div className='w-2/5'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Last Login
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  Today
                </p>
              </div>
            </div>
            <div className='w-2/5'>
              <div className='border-b pb-3'>
                <p className='mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium'>
                  Status
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  Approved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Index;
