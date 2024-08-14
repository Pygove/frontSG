import React from 'react';

const Test = () => {
  return (
    <>
      <nav
        id='nav'
        className='top-0 left-0 right-0 fixed flex bg-white h-14 border-b border-gray-100 z-30 w-screen transition-position lg:transition-none lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800'
      >
        <div className='flex-1 items-stretch flex h-14'>
          <div className='flex lg:hidden items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 pl-3 pr-0'>
            <span className='inline-flex justify-center items-center w-6 h-6'>
              <svg
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='inline-block'
              >
                <path
                  fill='currentColor'
                  d='M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z'
                ></path>
              </svg>
            </span>
          </div>
          <div className='hidden lg:flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 pl-3 pr-0'>
            <span className='inline-flex justify-center items-center w-6 h-6'>
              <svg
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='inline-block'
              >
                <path
                  fill='currentColor'
                  d='M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z'
                ></path>
              </svg>
            </span>
          </div>
          <div className='hidden lg:flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
            <div className=''>
              <div className='relative border-gray-700 dark:bg-gray-800'>
                <input
                  placeholder='Search (ctrl+k)'
                  type='text'
                  className='px-3 py-2 max-w-full focus:ring focus:outline-none dark:placeholder-gray-400 w-full h-12 border-0 border-gray-700 dark:bg-gray-800 rounded'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-none items-stretch flex h-14 lg:hidden'>
          <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
            <span className='inline-flex justify-center items-center w-6 h-6 relative'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                className='inline-block'
              >
                <path
                  fill='currentColor'
                  d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21'
                ></path>
              </svg>
              <div className='w-2.5 h-2.5 rounded-full absolute top-0 right-0 bg-yellow-600 text-white border-yellow-700'></div>
            </span>
          </div>
          <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
            <span className='inline-flex justify-center items-center w-6 h-6'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                className='inline-block'
              >
                <path
                  fill='currentColor'
                  d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z'
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='absolute w-screen top-14 left-0 bg-white shadow lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900 hidden'>
          <div className='max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto'>
            <div className='block items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white lg:flex p-0 lg:py-2 lg:px-3 lg:border-r lg:border-gray-100 lg:dark:border-gray-800 dropdown'>
              <a className='flex items-center py-2 px-3 bg-gray-100 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent'>
                <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
                    ></path>
                  </svg>
                </span>
                <span className='px-2 transition-colors'>Sample menu</span>
                <span className='inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
                    ></path>
                  </svg>
                </span>
              </a>
              <div className='text-sm border-gray-100 border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700 lg:hidden'>
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Item One</span>
                </div>
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Item Two</span>
                </div>
                <hr className='border-gray-100 hidden lg:block lg:my-0.5 dark:border-gray-700 border-t' />
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Item Last</span>
                </div>
              </div>
            </div>
            <div className='block items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white lg:flex p-0 lg:py-2 lg:px-3 lg:border-r lg:border-gray-100 lg:dark:border-gray-800 dropdown'>
              <a className='flex items-center py-2 px-3 bg-gray-100 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent'>
                <div className='w-6 h-6 mr-3 inline-flex'>
                  <img
                    src='https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93'
                    alt='John Doe'
                    className='rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-gray-800'
                  />
                </div>
                <div>
                  <span>John Doe</span>
                </div>
                <span className='inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
                    ></path>
                  </svg>
                </span>
              </a>
              <div className='text-sm border-gray-100 border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700 lg:hidden'>
                <a className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>My Profile</span>
                </a>
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Settings</span>
                </div>
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Messages</span>
                </div>
                <hr className='border-gray-100 hidden lg:block lg:my-0.5 dark:border-gray-700 border-t' />
                <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3'>
                  <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                    <svg
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      className='inline-block'
                    >
                      <path
                        fill='currentColor'
                        d='M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z'
                      ></path>
                    </svg>
                  </span>
                  <span className='px-2 transition-colors'>Log Out</span>
                </div>
              </div>
            </div>
            <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3 lg:border-r lg:border-gray-100 lg:dark:border-gray-800 lg:w-16 lg:justify-center'>
              <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z'
                  ></path>
                </svg>
              </span>
              <span className='px-2 transition-colors lg:hidden'>
                Light/Dark
              </span>
            </div>
            <a
              className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3 lg:border-r lg:border-gray-100 lg:dark:border-gray-800 lg:w-16 lg:justify-center'
              href='https://justboil.me/tailwind-admin-templates/vue-dashboard/'
            >
              <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z'
                  ></path>
                </svg>
              </span>
              <span className='px-2 transition-colors lg:hidden'>About</span>
            </a>
            <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3 lg:border-r lg:border-gray-100 lg:dark:border-gray-800 lg:w-16 lg:justify-center'>
              <span className='inline-flex justify-center items-center w-6 h-6 relative transition-colors'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21'
                  ></path>
                </svg>
                <div className='w-2.5 h-2.5 rounded-full absolute top-0 right-0 bg-yellow-600 text-white border-yellow-700'></div>
              </span>
              <span className='px-2 transition-colors lg:hidden'>Updates</span>
            </div>
            <div className='flex items-center grow-0 shrink-0 relative hover:text-blue-500 cursor-pointer hover:text-blue-500 text-black dark:text-white py-2 px-3 lg:w-16 lg:justify-center'>
              <span className='inline-flex justify-center items-center w-6 h-6 transition-colors'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z'
                  ></path>
                </svg>
              </span>
              <span className='px-2 transition-colors lg:hidden'>Log out</span>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id='aside'
        className='flex flex-col w-60 h-screen top-0 fixed transition-position dark:bg-gray-900/70 dark:shadow-r-gray-800 z-50 bg-gray-800 -left-60 lg:left-0 lg:w-20'
      >
        <div className='flex flex-row w-full shrink-0 h-14 items-center bg-gray-900 text-white lg:justify-center'>
          <div className='flex-1 px-3 flex justify-center'>
            <span className='lg:hidden'>Admin</span>{' '}
            <b className='font-black'>One</b>
          </div>
        </div>
        <div className='flex-1'>
          <p className='p-3 text-xs uppercase text-gray-400 lg:hidden'>
            General
          </p>
          <ul>
            <li>
              <a
                className='router-link-active bg-gray-600/50 flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'
                aria-current='page'
              >
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none font-bold text-white'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden font-bold text-white'>
                  Dashboard
                </span>
              </a>
            </li>
          </ul>
          <p className='p-3 text-xs uppercase text-gray-400 lg:hidden'>
            Examples
          </p>
          <ul>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 relative flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z'
                    ></path>
                  </svg>
                  <div className='w-2.5 h-2.5 rounded-full absolute top-0 right-2 lg:right-6 bg-yellow-600 text-white border-yellow-700'></div>
                </span>
                <span className='grow lg:hidden text-gray-300'>
                  Tables &amp; Lists
                </span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Forms</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>UI</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Dark mode</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Pricing</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Styles</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Profile</span>
              </a>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Login</span>
              </a>
            </li>
          </ul>
          <p className='p-3 text-xs uppercase text-gray-400 lg:hidden'>Subs</p>
          <ul>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Dropdown</span>
                <span className='inline-flex justify-center items-center w-12 h-6 flex-none lg:hidden text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'
                    ></path>
                  </svg>
                </span>
              </a>
              <ul className='bg-gray-700 bg-opacity-50 hidden'>
                <li>
                  <a className='flex cursor-pointer p-3 text-sm hover:bg-gray-600 hover:bg-opacity-50'>
                    <span className='grow text-gray-300'>Sub-item One</span>
                  </a>
                </li>
                <li>
                  <a className='flex cursor-pointer p-3 text-sm hover:bg-gray-600 hover:bg-opacity-50'>
                    <span className='grow text-gray-300'>Sub-item Two</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'>
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>Submenus</span>
                <span className='inline-flex justify-center items-center w-12 h-6 flex-none lg:hidden text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <p className='p-3 text-xs uppercase text-gray-400 lg:hidden'>About</p>
          <ul>
            <li>
              <a
                href='https://justboil.me/tailwind-admin-templates/vue-dashboard/'
                className='flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50'
              >
                <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z'
                    ></path>
                  </svg>
                </span>
                <span className='grow lg:hidden text-gray-300'>About</span>
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a
              href='https://justboil.me/tailwind-admin-templates/vue-dashboard/'
              className='flex cursor-pointer py-2 bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
            >
              <span className='inline-flex justify-center items-center w-12 lg:w-20 h-6 flex-none text-gray-300'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z'
                  ></path>
                </svg>
              </span>
              <span className='grow lg:hidden text-gray-300'>
                Buy dashboard
              </span>
            </a>
          </li>
        </ul>
      </aside>
      <aside
        id='aside-right'
        className='w-60 pr-1.5 fixed z-40 h-screen lg:h-screen-menu top-0 lg:top-14 bg-white border-l border-gray-100 overflow-y-scroll transition-position dark:bg-gray-900 dark:border-gray-700 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 -right-60'
      >
        <div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>Et quam aut aperiam expedita eos sit....</div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-red-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                2 weeks ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Fuga eum veritatis placeat cumque rerum. Voluptates...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Unde nesciunt id autem odit distinctio non...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-blue-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>Ut inventore a qui velit quia dolorem...</div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Optio laboriosam illo consectetur hic. Perspiciatis veritatis...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-blue-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                3 weeks ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Maiores ad fugiat in doloremque similique dolor....
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-yellow-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                3 weeks ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Ea excepturi quia consequatur ea pariatur iure...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                3 weeks ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Voluptas asperiores magnam consequatur mollitia alias eum...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Est in et aliquid mollitia. Nesciunt autem...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Exercitationem saepe tenetur exercitationem accusantium enim
              veritatis....
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Laborum est deserunt quasi. Similique similique rem...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                2 hours ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Doloribus iusto qui eum alias ipsa rerum....
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Est esse dolor corporis molestiae quae dolores....
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Tempore nobis et ullam deleniti. Molestiae harum...
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                1 month ago
              </div>
            </div>
          </div>
          <div className='p-6 border-b border-gray-100 last:border-b-0 dark:border-gray-700'>
            <div className='mb-3'>
              Aut aperiam facere distinctio et et earum....
            </div>
            <div className='flex justify-start'>
              <div className='inline-flex rounded-sm text-white bg-emerald-500'>
                <span className='inline-flex justify-center items-center w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='inline-block'
                  >
                    <path
                      fill='currentColor'
                      d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    ></path>
                  </svg>
                </span>
              </div>
              <div className='text-sm text-gray-500 ml-3 dark:text-gray-400'>
                2 weeks ago
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section className='p-6' data-v-69efce2b=''>
        <div
          className='justify-between items-center block md:flex'
          data-v-69efce2b=''
        >
          <div className='flex shrink-1 grow-9 items-center justify-center mb-6 md:mb-0'>
            <ul data-v-69efce2b=''>
              <li
                className='title-stack-item inline-block pr-3 text-2xl text-gray-500 last:pr-0 last:font-black last:text-black dark:text-gray-100'
                data-v-69efce2b=''
              >
                Admin
              </li>
              <li
                className='title-stack-item inline-block pr-3 text-2xl text-gray-500 last:pr-0 last:font-black last:text-black dark:text-gray-100'
                data-v-69efce2b=''
              >
                Dashboard
              </li>
            </ul>
          </div>
          <div className='flex shrink-1 grow-9 items-center justify-center'>
            <a
              className='inline-flex cursor-pointer justify-center items-center whitespace-nowrap ring-blue-700 focus:outline-none transition-colors duration-150 border bg-blue-600 text-white border-blue-700 hover:bg-blue-700 py-2 px-3 focus:ring rounded'
              href='https://justboil.me/tailwind-admin-templates/vue-dashboard/'
              data-v-69efce2b=''
            >
              <span className='inline-flex justify-center items-center w-6 h-6'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z'
                  ></path>
                </svg>
              </span>
              <span className='pl-2 pr-2'>Buy dashboard</span>
            </a>
          </div>
        </div>
      </section>
      <section className='border-gray-100 bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white'>
        <div className='justify-between items-center block md:flex'>
          <div className='flex shrink-1 grow-9 items-center justify-center mb-6 md:mb-0'>
            <h1 className='text-3xl font-semibold leading-tight'>
              {' '}
              Dashboard{' '}
            </h1>
          </div>
          <div className='flex shrink-1 grow-9 items-center justify-center'>
            <button
              className='inline-flex cursor-pointer justify-center items-center whitespace-nowrap ring-blue-700 focus:outline-none transition-colors duration-150 border bg-white text-black border-gray-300 hover:bg-gray-50 py-2 px-3 focus:ring rounded'
              type='button'
            >
              <span className='inline-flex justify-center items-center w-6 h-6'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  className='inline-block'
                >
                  <path
                    fill='currentColor'
                    d='M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z'
                  ></path>
                </svg>
              </span>
              <span className='pl-2 pr-2'>Dark Mode</span>
            </button>
          </div>
        </div>
      </section>
      <div className='flex items-center flex-col justify-center overflow-hidden fixed inset-0 z-40'>
        <div className='absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700'></div>
      </div>
    </>
  );
};

export default Test;
