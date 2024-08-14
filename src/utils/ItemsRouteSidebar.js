const RoutesNavbar = [
  {
    title: 'Sistema',
    listItems: [
      {
        title: 'Resumen',
        to: '/',
        icon: 'dashboard',
      },
      {
        title: 'Caja',
        to: '/caja',
        icon: 'dollar-circle',
        // subRoutes: [
        //   {
        //     title: 'Nuevo movimiento',
        //     to: '/caja/nuevo-movimiento',
        //   },
        // ],
      },
      {
        title: 'Clientes',
        to: '/clientes',
        icon: 'group',
        // subRoutes: [
        //   {
        //     title: 'Ver clientes',
        //     to: '/clientes/ver-clientes',
        //   },
        //   {
        //     title: 'Nuevo cliente',
        //     to: '/clientes/nuevo-cliente',
        //   },
        // ],
      },
      {
        title: 'Productos',
        to: '/productos',
        icon: 'cube',
      },
      {
        title: 'Proveedores',
        to: '/proveedores',
        icon: 'truck',
      },
      {
        title: 'Pendientes',
        to: '/pendientes',
        icon: 'pin',
      },
    ],
  },
];

export default RoutesNavbar;
