import React from 'react';

const TitleItemNavbar = ({ title, sidebar }) => (
  <h3
    className={`${
      sidebar ? 'block' : 'hidden'
    } mb-2 text-xs uppercase text-gray-400 font-medium`}
  >
    {title}
  </h3>
);

export default TitleItemNavbar;
