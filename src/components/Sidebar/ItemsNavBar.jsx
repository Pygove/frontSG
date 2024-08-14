import React from 'react';
import { ItemNavbarSelect, ItemNavbarSimple } from './ItemNavbar';

const ItemsNavBar = ({ listItems, sidebar }) => {
  return (
    <ul className='flex flex-col gap-y-1 text-sm font-medium'>
      {listItems.map((item, index) => (
        <ItemNavbarSimple
          key={`item-simple-${index}`}
          item={item}
          sidebar={sidebar}
        />
      ))}
    </ul>
  );
};

export default ItemsNavBar;
