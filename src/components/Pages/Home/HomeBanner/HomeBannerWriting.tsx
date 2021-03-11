import React from 'react';

interface IHomeBannerWritingProps {}

const HomeBannerWriting: React.FC<IHomeBannerWritingProps> = () => {
  return (
    <div className="inline-block ">
      <h1 className="text-5xl font-bold text-center text-white md:text-left md:text-7xl">
        IEEE INSAT
        <br />
        STUDENT BRANCH
      </h1>
      <h2 className="mt-2 text-lg font-semibold text-center md:pr-2 md:mt-0 md:text-xl md:text-right ">
        Advancing Technology for Humanity
      </h2>
    </div>
  );
};

export default HomeBannerWriting;
