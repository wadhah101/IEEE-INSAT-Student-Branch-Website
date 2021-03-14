import React from 'react';
import HomeDescriptionVideo from './HomeDescriptionVideo';
import MainDescriptionStatistics from './MainDescriptionStatistics';
import MainDescriptionWriting from './MainDescriptionWriting';

const HomeMainDescription: React.FC = () => {
  return (
    <div>
      <MainDescriptionWriting />

      <div className="mx-auto mt-10 md:w-3/4 md:mt-20">
        <MainDescriptionStatistics />
      </div>

      <div className="mt-10 md:mt-20">
        <HomeDescriptionVideo />
      </div>
    </div>
  );
};

export default HomeMainDescription;
