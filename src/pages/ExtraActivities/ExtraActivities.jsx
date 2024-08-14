import React, { useState, useEffect } from 'react';
import ViewActivities from '../../containers/ExtraActivities/ViewActivities';
// import SummaryStatistics from '../../containers/SummaryStatistics';

const ExtraActivities = () => {
  useEffect(() => {}, []);
  return (
    <>
      {/* <SummaryStatistics /> */}
      <div className='grid grid-cols-4 gap-2'>
        <ViewActivities />
      </div>
    </>
  );
};

export default ExtraActivities;
