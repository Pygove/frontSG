import React, { useState } from 'react';
import GroupItemNavbar from '../components/Sidebar/GroupItemNavbar';
import TitleItemNavbar from '../components/Sidebar/TitleItemNavbar';
import ItemsNavBar from '../components/Sidebar/ItemsNavBar';
import RoutesNavbar from '../utils/ItemsRouteSidebar';

const Sidebar = ({ sidebar, setSidebar }) => {
  // console.log(RoutesNavbar);
  return (
    <nav
      className={`${sidebar ? 'w-56' : ''} flex flex-col p-3 bg-neutral h-full`}
    >
      {RoutesNavbar.map((RouteNavbar, index) => (
        <GroupItemNavbar key={index}>
          <TitleItemNavbar title={RouteNavbar.title} sidebar={sidebar} />
          <ItemsNavBar listItems={RouteNavbar.listItems} sidebar={sidebar} />
        </GroupItemNavbar>
      ))}
    </nav>
  );
};

export default Sidebar;
