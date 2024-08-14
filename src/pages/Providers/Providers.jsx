import React, { useEffect, useContext } from 'react';
import BreadcrumbContext from '../../context/breadcrumb.context';
import { ProvidersRoute } from '../../utils/BreadcrumbRoutes';


const crumb = [ProvidersRoute];

const Providers = () => {
  const { setBreadcrumbState } = useContext(BreadcrumbContext);
  useEffect(() => {
    setBreadcrumbState(crumb);
  }, []);
  return (
    <>
      <div>Proveedores</div>
      {/* <Index /> */}
      {/* <InputSelect /> */}
    </>
  );
};

export default Providers;
