import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const SubItemNavbar = ({ subItems }) => {
  const { title, to } = subItems;
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  // console.log(subItems);

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center pl-11 py-2 pr-2 hover:text-white ${
          match ? 'text-white' : 'text-gray-400'
        } rounded cursor-pointer`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SubItemNavbar;
