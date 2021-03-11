import React from 'react';
import HomeDescriptionVideo from './HomeDescriptionVideo';
import MainDescriptionWriting from './MainDescriptionWriting';

const HomeMainDescription: React.FC = () => {
  return (
    <div>
      <MainDescriptionWriting />
      {/* TODO add writing */}
      <div className="mt-10 md:mt-20">
        <HomeDescriptionVideo />
        {/* TODO  */}
      </div>
    </div>
  );
};

export default HomeMainDescription;
