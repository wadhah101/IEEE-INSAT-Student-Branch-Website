import React from 'react';
import HomeDescriptionVideo from './HomeDescriptionVideo';
import MainDescriptionStatistics from './MainDescriptionStatistics';
import MainDescriptionWriting from './MainDescriptionWriting';

const HomeMainDescription: React.FC = () => {
  return (
    <div>
      <MainDescriptionWriting />
      <div className="mt-10 md:mt-16">
        <MainDescriptionStatistics />
      </div>
      <div className="mt-10 md:mt-16">
        <HomeDescriptionVideo />
      </div>
    </div>
  );
};

export default HomeMainDescription;
