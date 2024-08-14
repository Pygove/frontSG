import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import MessageError from './MessageError';

export const MyTextInput = ({ label, type = 'text', ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className='block text-sm font-medium text-gray-700'
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        type={type}
        className={`inputCustom ${meta.touched && meta.error ? 'error' : ''}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <MessageError>{meta.error}</MessageError>
      ) : null}
    </>
  );
};
export const PasswordInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className='block text-sm font-medium text-gray-700'
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        type='password'
        className={`inputCustom ${meta.touched && meta.error ? 'error' : ''}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <MessageError>{meta.error}</MessageError>
      ) : null}
    </>
  );
};

export const InputText = (props) => {
  const {
    htmlFor,
    label,
    name,
    id,
    type = 'text',
    autoComplete,
    value,
    onChange,
  } = props;
  return (
    <>
      <label
        htmlFor={htmlFor}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />
    </>
  );
};

export const InputSelect = () => {
  return (
    <div className='col-span-6 sm:col-span-3'>
      <label
        htmlFor='country'
        className='block text-sm font-medium text-gray-700'
      >
        Country
      </label>
      <select
        id='country'
        name='country'
        autoComplete='country-name'
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
};

export const InputTextArea = () => {
  return (
    <div>
      <label
        htmlFor='about'
        className='block text-sm font-medium text-gray-700'
      >
        About
      </label>
      <div className='mt-1'>
        <textarea
          id='about'
          name='about'
          rows={3}
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
          placeholder='you@example.com'
          defaultValue={''}
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        Brief description for your profile. URLs are hyperlinked.
      </p>
    </div>
  );
};

export const ChangeProfilePicture = () => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>Photo</label>
      <div className='mt-1 flex items-center'>
        <span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
          <svg
            className='h-full w-full text-gray-300'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </span>
        <button
          type='button'
          className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Change
        </button>
      </div>
    </div>
  );
};

export const UploadFilePicture = () => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>
        Cover photo
      </label>
      <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
        <div className='space-y-1 text-center'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='flex text-sm text-gray-600'>
            <label
              htmlFor='file-upload'
              className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
            >
              <span>Upload a file</span>
              <input
                id='file-upload'
                name='file-upload'
                type='file'
                className='sr-only'
              />
            </label>
            <p className='pl-1'>or drag and drop</p>
          </div>
          <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

// Solo 1 botón
export const FooterForm = () => {
  return (
    <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
      <button
        type='submit'
        className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Save
      </button>
    </div>
  );
};

export const InputWithAddon = () => {
  return (
    <div className='col-span-3 sm:col-span-2'>
      <label
        htmlFor='company-website'
        className='block text-sm font-medium text-gray-700'
      >
        Website
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
          http://
        </span>
        <input
          type='text'
          name='company-website'
          id='company-website'
          className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
          placeholder='www.example.com'
        />
      </div>
    </div>
  );
};

export const InputCheckbox = () => {
  return (
    <fieldset>
      <legend className='text-base font-medium text-gray-900'>By Email</legend>
      <div className='mt-4 space-y-4'>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='comments' className='font-medium text-gray-700'>
              Comments
            </label>
            <p className='text-gray-500'>
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='candidates' className='font-medium text-gray-700'>
              Candidates
            </label>
            <p className='text-gray-500'>
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              id='offers'
              name='offers'
              type='checkbox'
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='offers' className='font-medium text-gray-700'>
              Offers
            </label>
            <p className='text-gray-500'>
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export const InputRadio = () => {
  return (
    <fieldset>
      <div>
        <legend className='text-base font-medium text-gray-900'>
          Push Notifications
        </legend>
        <p className='text-sm text-gray-500'>
          These are delivered via SMS to your mobile phone.
        </p>
      </div>
      <div className='mt-4 space-y-4'>
        <div className='flex items-center'>
          <input
            id='push-everything'
            name='push-notifications'
            type='radio'
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
          />
          <label
            htmlFor='push-everything'
            className='ml-3 block text-sm font-medium text-gray-700'
          >
            Everything
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='push-email'
            name='push-notifications'
            type='radio'
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
          />
          <label
            htmlFor='push-email'
            className='ml-3 block text-sm font-medium text-gray-700'
          >
            Same as email
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='push-nothing'
            name='push-notifications'
            type='radio'
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
          />
          <label
            htmlFor='push-nothing'
            className='ml-3 block text-sm font-medium text-gray-700'
          >
            No push notifications
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export const TitleAndDetailsForm = () => {
  return (
    <div className='px-4 sm:px-0'>
      <h3 className='text-lg font-medium leading-6 text-gray-900'>Profile</h3>
      <p className='mt-1 text-sm text-gray-600'>
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
  );
};

export const InputIconTextSelect = () => {
  return (
    <div>
      <label
        htmlFor='price'
        className='block text-sm font-medium text-gray-700'
      >
        Price
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <span className='text-gray-500 sm:text-sm'>$</span>
        </div>
        <input
          type='text'
          name='price'
          id='price'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
          placeholder='0.00'
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor='currency' className='sr-only'>
            Currency
          </label>
          <select
            id='currency'
            name='currency'
            className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};
