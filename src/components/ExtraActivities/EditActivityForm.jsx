import React, { Fragment, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { updateActivitySchema } from '../../utils/schemas/activity.schema';
import { MyTextInput } from '../../components/Forms/Inputs';
import ActivitiesApi from '../../utils/services/activities.service';

const EditActivityForm = (props) => {
  const { open, setOpen, activity, fetchActivities } = props;
  const activityService = new ActivitiesApi();

  const [activityData, setActivityData] = useState(activity || {});

  useEffect(() => {
    setActivityData(activity);
  }, [activity]);

  const fetchActivity = async (id) => {
    const data = await activityService.findOne(id);
    setActivityData(data);
  };

  const updateActivity = async (values) => {
    const data = await activityService.update(activityId, values);
    if (data) {
      toast.success('Actividad actualizada correctamente');
      fetchActivities();
      setOpen(false);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-hidden'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='w-full relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <Formik
                initialValues={activityData}
                validationSchema={updateActivitySchema}
                onSubmit={async (values, { setSubmitting }) => {
                  const loadingToast = toast.loading(
                    'Actualizando actividad...'
                  );
                  setSubmitting(true);
                  try {
                    const res = await activityService.update(activityData.id, {
                      name: values.name,
                    });
                    setOpen(false);
                    toast.dismiss(loadingToast);
                    toast.success('Actividad actualizada correctamente');
                    await fetchActivities();
                  } catch (error) {
                    setSubmitting(false);
                    toast.dismiss(loadingToast);
                    toast.error(error.message);
                  }
                }}
              >
                {({ isSubmitting, dirty }) => (
                  <Form>
                    {/* content */}
                    <div className='bg-white pt-2 pb-4 px-4'>
                      <div className='flex items-center justify-between'>
                        <span className='text-lg font-bold leading-none text-gray-800'>
                          Editar Actividad
                        </span>
                        <button
                          type='button'
                          className='inline-flex items-center justify-center p-1 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                          onClick={() => setOpen(false)}
                        >
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                      <span className='text-base font-medium text-indigo-700'>
                        {activityData?.name}
                      </span>
                      <div className='mt-2'>
                        <MyTextInput
                          label='Nombre'
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Ej: Venecitas'
                        />
                      </div>
                    </div>
                    {/* BUTTONS */}
                    <div className='bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        disabled={isSubmitting || !dirty}
                        type='submit'
                        className={`${
                          isSubmitting || !dirty
                            ? 'disabled:opacity-75 cursor-not-allowed'
                            : ''
                        } w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm`}
                      >
                        Guardar
                      </button>
                      <button
                        type='button'
                        disabled={isSubmitting || !dirty}
                        className={`${
                          isSubmitting || !dirty
                            ? 'disabled:opacity-75 cursor-not-allowed'
                            : ''
                        } mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                        onClick={() => setOpen(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditActivityForm;
