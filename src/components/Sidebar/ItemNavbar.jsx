import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import SubItemNavbar from './SubItemNavbar';

const active = 'white';
const notActive = 'grey';

export const ItemNavbarSelect = ({ item }) => {
  const { title, icon, to, subRoutes } = item;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: `${resolved.pathname}/*`, end: true });
  // Para los subItems
  const [activeSubItem, setActiveSubItem] = useState(false);

  // console.log('resolved: ', resolved);
  // console.log('item: ', item);
  // console.log('match: ', match);

  return (
    <li className={`${match ? 'bg-indigo-800' : 'hover:bg-gray-900'} rounded`}>
      <div className='flex items-center pl-3 py-2.5 pr-2'>
        <Link
          to={to}
          className={`flex items-center ${
            match ? 'text-gray-50' : 'text-gray-400'
          } hover:text-white mr-auto cursor-pointer`}
        >
          <span className='inline-flex items-center mr-2'>
            <box-icon
              type='solid'
              color={match ? active : notActive}
              name={icon}
            ></box-icon>
          </span>
          <span>{title}</span>
        </Link>
        <span
          className='inline-flex items-center cursor-pointer'
          onClick={() => setActiveSubItem(!activeSubItem)}
        >
          {activeSubItem ? (
            <box-icon color={match ? active : notActive} name='chevron-up' />
          ) : (
            <box-icon color={match ? active : notActive} name='chevron-down' />
          )}
        </span>
      </div>
      <ul className={`${activeSubItem ? 'visible' : 'hidden'}`}>
        {subRoutes.map((item, index) => (
          <SubItemNavbar key={`sub-item-${title}-${index}`} subItems={item} />
        ))}
      </ul>
    </li>
  );
};

export const ItemNavbarSimple = ({ item, sidebar }) => {
  const { title, icon, to } = item;
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li title={title}>
      <Link
        to={to}
        className={`flex items-center p-2 pr-2.5 ${
          match
            ? 'bg-indigo-500 text-gray-50'
            : 'text-gray-400 hover:bg-gray-900'
        } ${sidebar && 'pr-2'} rounded cursor-pointer`}
      >
        <span className='inline-flex items-center'>
          <box-icon
            type='solid'
            color={match ? active : notActive}
            name={icon}
          ></box-icon>
        </span>
        <span className={`${sidebar ? 'block ml-2' : 'hidden'}`}>{title}</span>
      </Link>
    </li>
  );
};
