import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Header/Profile';
import ShoppingCart from '../components/Header/ShoppingCart';

const Header = (props) => {
  const { sidebar, setSidebar } = props;
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='navbar-start'>
        <label
          className='btn btn-ghost btn-circle'
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </label>
        <Link to='/' className='btn normal-case text-xl'>
          Sistema de Gestion
        </Link>
      </div>
      <div className='navbar-end gap-x-3'>
        <ShoppingCart />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
