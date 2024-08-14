import React, { useEffect, useContext } from 'react';
import BreadcrumbContext from '../../context/breadcrumb.context';
import { ClientsRoute } from '../../utils/BreadcrumbRoutes';

const crumb = [ClientsRoute];

const Clients = () => {
  const { setBreadcrumbState } = useContext(BreadcrumbContext);
  useEffect(() => {
    setBreadcrumbState(crumb);
  }, []);
  return (
    <>
      <div>Clients</div>
      {/* <Index /> */}
      {/* <InputSelect /> */}
    </>
  );
};

export default Clients;
