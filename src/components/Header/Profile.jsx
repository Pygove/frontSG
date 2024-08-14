import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Profile',
    to: '/profile',
  },
  {
    name: 'Settings',
    to: '/settings',
  },
  {
    name: 'Logout',
    to: 'logout',
  },
];

const Profile = () => {
  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex='0'
        className='btn btn-ghost btn-circle avatar hover:border-2 hover:border-slate-300'
      >
        <div className='w-10 rounded-full'>
          <img src='https://api.lorem.space/image/face?hash=33791' />
        </div>
      </label>
      <ul
        tabIndex='0'
        className='mt-3 p-2 drop-shadow-lg menu menu-compact text-slate-800 dropdown-content bg-base-100 rounded-box w-52'
      >
        {items.map(({ to, name }, index) => (
          <li key={`sub-item-profile-${index}`}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
