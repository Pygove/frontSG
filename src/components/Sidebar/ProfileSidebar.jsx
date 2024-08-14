import React from 'react';

const ProfileSidebar = () => {
  return (
    <div className='flex items-center mt-48 mb-4 px-8'>
      <div className='w-10 h-10 bg-cover rounded-md mr-3'>
        <img
          src='https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png'
          alt='display avatar'
          role='img'
          className='rounded-full h-full w-full overflow-hidden shadow'
        />
      </div>
      <div>
        <p className='text-gray-200 text-sm font-medium'>Steve Doe</p>
        <p className='text-gray-200 text-xs'>View Profile</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
