import React, { useContext } from 'react';
import BreadcrumbContext from '../context/breadcrumb.context';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  // console.log(location);

  const { breadcrumb } = useContext(BreadcrumbContext);

  const isLast = (index) => index === breadcrumb.length - 1;

  return (
    <div className='mb-3'>
      <div className='text-sm text-indigo-700 breadcrumbs py-0'>
        <ul>
          {breadcrumb.length > 0 &&
            breadcrumb.map((item, index) =>
              !isLast(index) ? (
                <li key={`breadcrumb-${index}`}>
                  <Link to={item.to} className='font-medium'>
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
        </ul>
      </div>
      <h4 className='text-3xl font-bold leading-tight text-slate-900'>
        {breadcrumb.length > 0 &&
          breadcrumb.map((item, index) => isLast(index) && item.name)}
      </h4>
    </div>
  );
};

export default Breadcrumb;
