import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import endPoints from '../../utils/api/endPoints';

const Search = ({ setProviders, getProviders }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Si no hay nada en el search, buscar todos los proveedores
    if (!search) {
      getProviders();
    }
  }, [search]);

  async function SearchProviders() {
    // Create a axios request to get the provider
    const res = await axios.get(endPoints.providers.getAll, {
      params: {
        search,
      },
    });

    // Set the providers state

    setProviders(res.data);
  }

  return (
    <div className='flex flex-col items-start gap-3 md:flex-row md:items-center'>
      <div className='flex h-10 w-full items-center gap-x-[1px] rounded bg-slate-200 md:max-w-sm	'>
        <input
          type='text'
          className='flex flex-1 border-none bg-transparent text-black sm:text-sm'
          placeholder='Buscar proveedor por nombre . . .'
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter'){
                SearchProviders();
            }
          }}
        />
        {/* <box-icon name='search-alt-2' /> */}
        <div
          className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-r bg-slate-300 hover:bg-slate-400'
          onClick={SearchProviders}
        >
          <SearchIcon className='h-5 w-5 text-slate-900' />
        </div>
      </div>
    </div>
  );
};

export default Search;
