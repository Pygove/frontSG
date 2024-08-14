import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';
import ActivitiesApi from '../../utils/services/activities.service';
import EmptyActivities from './EmptyActivities';
import NewActivityForm from '../../components/ExtraActivities/NewActivityForm';
import EditActivityForm from '../../components/ExtraActivities/EditActivityForm';
import DeleteActivityModal from '../../components/ExtraActivities/DeleteActivityModal';
import ItemsTable from '../../components/SkeletonLoader/Activities/ItemsTable';

const ViewActivities = () => {
  // Metodos CRUD de actividades
  const activityService = new ActivitiesApi();

  // Modals
  const [openDel, setOpenDel] = useState(false); // Delete
  const [openEdit, setOpenEdit] = useState(false); // Edit
  const [openNew, setOpenNew] = useState(false); // New
  // Fetch activities
  const [currentAct, setCurrentAct] = useState(null);
  const [activities, setActivities] = useState([]);

  // Para la tabla de actividades
  useEffect(() => {
    fetchActivities();
  }, [activities.length]);

  async function fetchActivities() {
    const data = await activityService.findAll();
    setActivities(data);
  }

  return (
    <>
      <DeleteActivityModal
        open={openDel}
        setOpen={setOpenDel}
        activity={currentAct}
        setActivity={setCurrentAct}
        fetchActivities={fetchActivities}
      />
      <EditActivityForm
        open={openEdit}
        setOpen={setOpenEdit}
        activity={currentAct}
        fetchActivities={fetchActivities}
      />
      <NewActivityForm
        open={openNew}
        setOpen={setOpenNew}
        fetchActivities={fetchActivities}
      />
      <div className='bg-white drop-shadow-md rounded-lg mt-5 col-span-4 sm:col-span-2'>
        <div className='flex items-center justify-between border-b border-slate-300 px-4 py-2'>
          <p className='text-lg font-semibold leading-5 text-gray-800'>
            Actividades Extra
          </p>
          <button
            type='button'
            onClick={() => setOpenNew(true)}
            className='inline-flex items-start justify-start py-2.5 sm:py-2 px-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
          >
            <p className='text-xs sm:text-sm font-medium leading-none text-white'>
              Agregar Actividad
            </p>
          </button>
        </div>
        <div className='max-h-72 overflow-y-auto'>
          <table className='w-full whitespace-nowrap'>
            <thead>
              <tr className='w-full text-sm leading-none text-gray-800 bg-slate-200'>
                <th className='pl-4 text-left font-medium py-2'>Nombre</th>
                <th className='text-center font-medium py-2'>Acciones</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {activities.length
                ? activities.map((activity) => (
                    <tr
                      key={`activity-${activity.id}`}
                      className='text-sm leading-none text-gray-800 my-0'
                    >
                      <td className='pl-4 text-sm text-gray-700 py-1.5'>
                        {activity.name}
                      </td>
                      <td className='flex justify-center gap-x-2 py-1.5'>
                        <button
                          type='button'
                          onClick={() => {
                            setCurrentAct({
                              id: activity.id,
                              name: activity.name,
                            });
                            setOpenEdit(true);
                          }}
                          className='flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full hover:bg-indigo-200 sm:mx-0'
                        >
                          <PencilAltIcon
                            className='h-6 w-6 text-indigo-600'
                            aria-hidden='true'
                          />
                        </button>
                        <button
                          type='button'
                          onClick={() => {
                            setCurrentAct({
                              id: activity.id,
                              name: activity.name,
                            });
                            setOpenDel(true);
                          }}
                          className='flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full hover:bg-red-200 sm:mx-0'
                        >
                          <TrashIcon
                            className='h-6 w-6 text-red-600'
                            aria-hidden='true'
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        {activities.length == 0 && <EmptyActivities />}
      </div>
    </>
  );
};
export default ViewActivities;
