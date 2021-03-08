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
      <h2 className="text-xl font-semibold text-right ">
        Advancing Technology for Humanity
      </h2>
    </div>
  );
};

export default HomeBannerWriting;
